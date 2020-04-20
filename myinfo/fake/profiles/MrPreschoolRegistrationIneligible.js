"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const fake_profile_1 = require("./fake-profile");
const mrSGDaddyPerfect_1 = require("./mrSGDaddyPerfect");
const childbirthRecords_1 = require("./childbirthRecords");
const id = "T2446959F";
const name = fake_profile_1.ProfileArchetype.MR_PRESCHOOL_REGISTRATION_INELIGIBLE;
exports.mrPreschoolRegistrationIneligible = {
    id,
    name,
    generate: (profileName) => {
        profileName = _.isEmpty(profileName) ? name : profileName;
        const profile = mrSGDaddyPerfect_1.mrSGDaddyPerfect.generate(profileName);
        profile.childrenbirthrecords = [
            childbirthRecords_1.preschoolEligibleChild_IC,
            childbirthRecords_1.preschoolEligibleChild_N2,
            childbirthRecords_1.preschoolIneligibleChild2,
        ];
        return profile;
    },
};
//# sourceMappingURL=MrPreschoolRegistrationIneligible.js.map