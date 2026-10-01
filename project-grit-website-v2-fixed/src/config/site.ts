export const site = {
  brand:{name:"Project Grit",tagline:"Men who show up.",mission:"[MISSION STATEMENT]",logo:"/brand/project-grit-logo.png",colors:{dark:"#0B111A",surface:"#151C24",bone:"#F0EEE8",muted:"#A9ADB1",gold:"#D7A84B",olive:"#667A58"}},
  pricing:{monthly:9.99,annual:69.99}, foundingSpotsLeft:100,
  join:{monthly:"#join",annual:"#join",default:"#join"}, launchDate:"2027-01-01",
  meetup:{time:"[TIME]",venue:"[VENUE NAME, CITY]",address:"[ADDRESS]",overrideDate:""},
  social:{facebook:"[FACEBOOK URL]",instagram:"[INSTAGRAM URL]",tiktok:"[TIKTOK URL]"},contactEmail:"[CONTACT EMAIL]",legalEntity:"[LEGAL ENTITY NAME LLC]",
  coaching:{travis:"[COACHING CONTACT LINK]",branden:"[COACHING CONTACT LINK]"},formEndpoint:"[FORM_ENDPOINT]",analytics:false
} as const;
export const monthlyEquivalent=(site.pricing.annual/12).toFixed(2); export const annualSavings=(site.pricing.monthly*12-site.pricing.annual).toFixed(2);