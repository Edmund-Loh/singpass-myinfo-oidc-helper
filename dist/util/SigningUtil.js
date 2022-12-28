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
exports.createClientAssertion = exports.generateMyInfoAuthorizationHeader = exports.HttpMethod = void 0;
const _ = require("lodash");
const qs = require("querystring");
const crypto = require("crypto");
const jose = require("node-jose");
const jwt = require("jsonwebtoken");
const SingpassMyinfoError_1 = require("./error/SingpassMyinfoError");
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "GET";
    HttpMethod["POST"] = "POST";
})(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
/**
 * Generate the Authorization header for requests to V3 MyInfo
 * @param url
 * @param queryParams
 * @param method
 * @param appId
 * @param signingKey
 * @param signingKeyPassphrase
 */
// tslint:disable-next-line: parameters-max-number
function generateMyInfoAuthorizationHeader(url, queryParams, method, appId, signingKey, nonce, timestamp, signingKeyPassphrase) {
    const authHeaderObj = {
        app_id: appId,
        nonce,
        signature_method: "RS256",
        timestamp, // Unix epoch time
    };
    const signature = generateSignature(authHeaderObj, queryParams, method, url, signingKey, signingKeyPassphrase);
    return generateAuthHeaderString(appId, nonce, signature, timestamp);
}
exports.generateMyInfoAuthorizationHeader = generateMyInfoAuthorizationHeader;
function generateAuthHeaderString(appId, nonceValue, signature, timestamp) {
    return "PKI_SIGN app_id=\"" + appId + // Defaults to 1st part of incoming request hostname
        "\",nonce=\"" + nonceValue +
        "\",signature_method=\"RS256\"" +
        ",signature=\"" + signature +
        "\",timestamp=\"" + timestamp +
        "\"";
}
/**
 * Function to generate signature for authenticated requests to myinfo v3
 * @param authHeader
 * @param queryParams
 * @param method
 * @param url
 * @param key
 * @param keyPassphrase
 */
function generateSignature(authHeader, queryParams, method, url, key, keyPassphrase) {
    const baseParams = _.merge(authHeader, queryParams);
    const sortedKeys = Object.keys(baseParams).sort();
    const initialAccObj = {};
    const sortedParams = sortedKeys.reduce((accObj, paramKey) => {
        return _.set(accObj, paramKey, baseParams[paramKey]);
    }, initialAccObj);
    const baseParamsStr = qs.unescape(qs.stringify(sortedParams)); // url safe
    const baseString = method.toUpperCase() + "&" + url + "&" + baseParamsStr;
    const signWith = { key };
    if (!!keyPassphrase) {
        _.set(signWith, "passphrase", keyPassphrase);
    }
    const signature = crypto.createSign("RSA-SHA256")
        .update(baseString)
        .sign(signWith, "base64");
    return signature;
}
function createClientAssertion({ issuer, audience, subject, key }) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!key)
            throw new SingpassMyinfoError_1.SingpassMyInfoError("Missing key to sign client assertion.");
        if (!key.alg)
            throw new SingpassMyinfoError_1.SingpassMyInfoError("Missing key algorithm to sign client assertion.");
        const signingKey = yield jose.JWK.asKey(key.key, key.format);
        return jwt.sign({}, signingKey.toPEM(true), { algorithm: key.alg, keyid: signingKey.kid, issuer, audience, subject, expiresIn: 120 });
    });
}
exports.createClientAssertion = createClientAssertion;
//# sourceMappingURL=SigningUtil.js.map