"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OidcHelper = void 0;
const querystringUtil = require("querystring");
const axios_client_1 = require("../client/axios-client");
const util_1 = require("../util");
const Logger_1 = require("../util/Logger");
const SingpassMyinfoError_1 = require("../util/error/SingpassMyinfoError");
class OidcHelper {
    constructor(props) {
        this.axiosClient = (0, axios_client_1.createClient)({
            timeout: 10000,
        });
        this.constructAuthorizationUrl = (state, nonce) => {
            const queryParams = Object.assign(Object.assign({ state }, (nonce ? { nonce } : {})), { redirect_uri: this.redirectUri, scope: "openid", client_id: this.clientID, response_type: "code" });
            const queryString = querystringUtil.stringify(queryParams);
            return `${this.authorizationUrl}?${queryString}`;
        };
        /**
         * Get tokens from Corppass endpoint. Note: This will fail if not on an IP whitelisted by SP.
         * Use getAccessTokenPayload and getIdTokenPayload on returned Token Response to get the token payload
         */
        this.getTokens = (authCode, axiosRequestConfig) => __awaiter(this, void 0, void 0, function* () {
            const params = {
                grant_type: "authorization_code",
                code: authCode,
                client_id: this.clientID,
                client_secret: this.clientSecret,
                redirect_uri: this.redirectUri,
            };
            const body = querystringUtil.stringify(params);
            const config = Object.assign({ headers: { "content-type": "application/x-www-form-urlencoded" } }, axiosRequestConfig);
            const response = yield this.axiosClient.post(this.tokenUrl, body, config);
            if (!response.data.id_token) {
                Logger_1.logger.error("Failed to get ID token: invalid response data", response.data);
                throw new SingpassMyinfoError_1.SingpassMyInfoError("Failed to get ID token");
            }
            return response.data;
        });
        /**
         * Get fresh tokens from Corppass endpoint. Note: This will fail if not on an IP whitelisted by SP.
         * Use getIdTokenPayload on returned Token Response to get the token payload
         */
        this.refreshTokens = (refreshToken, axiosRequestConfig) => __awaiter(this, void 0, void 0, function* () {
            const params = {
                scope: "openid",
                grant_type: "refresh_token",
                client_id: this.clientID,
                client_secret: this.clientSecret,
                refresh_token: refreshToken,
            };
            const body = querystringUtil.stringify(params);
            const config = Object.assign({ headers: { "content-type": "application/x-www-form-urlencoded" } }, axiosRequestConfig);
            const response = yield this.axiosClient.post(this.tokenUrl, body, config);
            if (!response.data.id_token) {
                Logger_1.logger.error("Failed to get ID token: invalid response data", response.data);
                throw new SingpassMyinfoError_1.SingpassMyInfoError("Failed to get ID token");
            }
            return response.data;
        });
        this._testExports = {
            corppassClient: this.axiosClient,
            validateStatusFn: this.validateStatus,
        };
        this.authorizationUrl = props.authorizationUrl;
        this.tokenUrl = props.tokenUrl;
        this.clientID = props.clientID;
        this.clientSecret = props.clientSecret;
        this.redirectUri = props.redirectUri;
        this.jweDecryptKey = props.jweDecryptKey;
        this.jwsVerifyKey = props.jwsVerifyKey;
    }
    /**
     * Decodes the access Token JWT inside the TokenResponse to get the payload
     */
    getAccessTokenPayload(tokens) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { access_token } = tokens;
                const verifiedJws = yield util_1.JweUtil.verifyJWS(access_token, this.jwsVerifyKey);
                return JSON.parse(verifiedJws.payload.toString());
            }
            catch (e) {
                Logger_1.logger.error("Failed to get access token payload", e);
                throw e;
            }
        });
    }
    /**
     * Decrypts the ID Token JWT inside the TokenResponse to get the payload
     * Use extractInfoFromIdTokenSubject on the returned Token Payload to get the NRIC, system defined ID and country code
     */
    getIdTokenPayload(tokens) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_token } = tokens;
                const decryptedJwe = yield util_1.JweUtil.decryptJWE(id_token, this.jweDecryptKey);
                const jwsPayload = decryptedJwe.payload.toString();
                const verifiedJws = yield util_1.JweUtil.verifyJWS(jwsPayload, this.jwsVerifyKey);
                return JSON.parse(verifiedJws.payload.toString());
            }
            catch (e) {
                Logger_1.logger.error("Failed to get ID token payload", e);
                throw e;
            }
        });
    }
    /**
     * Returns the NRIC, system defined ID and country code from the ID token payload
     */
    extractInfoFromIdTokenSubject(payload) {
        const { sub } = payload;
        if (sub) {
            const extractionRegex = /s=([STFG]\d{7}[A-Z]).*,u=(.*),c=(.*)/i;
            const matchResult = sub.match(extractionRegex);
            if (!matchResult) {
                throw Error("Token payload sub property is invalid, does not contain valid NRIC, uuid and country code string");
            }
            const nric = matchResult[1];
            const uuid = matchResult[2];
            const countryCode = matchResult[3];
            return { nric, uuid, countryCode };
        }
        throw Error("Token payload sub property is not defined");
    }
    validateStatus(status) {
        return status === 302 || (status >= 200 && status < 300);
    }
}
exports.OidcHelper = OidcHelper;
//# sourceMappingURL=corppass-helper.js.map