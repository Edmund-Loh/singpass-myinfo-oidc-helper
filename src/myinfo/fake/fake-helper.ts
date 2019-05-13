import { ProfileArchetype } from "./profiles/fake-profile";
import { profiles } from "./profiles/fake-profiles";
import { domain, domainMap } from "../domain";
import { isEmpty, toPairs } from "lodash";

export interface MockParams {
	archetype: ProfileArchetype;
	// tslint:disable-next-line: max-union-size
	marital?: "SINGLE" | "MARRIED" | "WIDOWED" | "DIVORCED";
	marriagedate?: string;
	marriagecertno?: string;
	countryofmarriage?: { desc: string, code: string };
	occupation?: string;
	occupationfreeform?: string;
	dob?: string;
}
type PersonBasic = domain.Components.Schemas.PersonBasic;

export interface IFakeMyInfoHelper {
	getPersonBasic: (mockParams: MockParams) => PersonBasic;
}

export class FakeMyInfoHelper implements IFakeMyInfoHelper {
	/**
	 * @param attributes attributes to return in the MyInfoPerson in getPersonData
	 */
	public constructor(
		private readonly attributes?: ReadonlyArray<string>,
	) { }

	/**
	 * fake getPersonData
	 * @param input the mock profile parameters.
	 * See FakeMyInfoPersonArchetypes for the actual person.
	 */
	public getPersonBasic = (mockParams: MockParams): PersonBasic => {
		const mockProfile = profiles.find((profile) => profile.name === mockParams.archetype);
		if (!mockProfile)
			return null;

		const myinfoPerson = {
			...mockProfile.generate(),
		};

		if (!isEmpty(mockParams.marital)) {
			myinfoPerson.marital.desc = mockParams.marital;

			myinfoPerson.marital.code = domainMap.sex.map.descToCode[mockParams.marital];
		}

		if (!isEmpty(mockParams.marriagedate)) {
			myinfoPerson.marriagedate.value = mockParams.marriagedate;
		}

		if (!isEmpty(mockParams.marriagecertno)) {
			myinfoPerson.marriagecertno.value = mockParams.marriagecertno;
		}

		if (!isEmpty(mockParams.countryofmarriage)) {
			myinfoPerson.countryofmarriage.desc = mockParams.countryofmarriage.desc;
			myinfoPerson.countryofmarriage.code = mockParams.countryofmarriage.code;
		}

		if (!isEmpty(mockParams.dob)) {
			myinfoPerson.dob.value = mockParams.dob;
		}

		if (!isEmpty(mockParams.occupation)) {
			myinfoPerson.occupation.value = mockParams.occupation;
		} else {
			if (!isEmpty(mockParams.occupationfreeform)) {
				myinfoPerson.occupation.value = "";
				myinfoPerson.occupation.desc = mockParams.occupationfreeform;
			}
		}

		if (!this.attributes) {
			return myinfoPerson;
		}

		return filterThroughMyInfoAttributes(myinfoPerson, this.attributes);
	}
}

/**
 * @description Returns new fake person with only the attributes listed in attributes param. Does not mutate.
 * @param person fake MyInfo person
 * @param attributes array of attributes to filter for
 */
function filterThroughMyInfoAttributes(person: PersonBasic, attributes: ReadonlyArray<string>): PersonBasic {
	const attrs = new Set(attributes);

	return toPairs(person)
		.filter(([k]) => attrs.has(k))
		.reduce((accumulator, [k, v]) => ({ ...accumulator, [k]: v }), {} as PersonBasic);
}