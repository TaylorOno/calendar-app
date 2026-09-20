const events = [
    {
        "title": "Bartender Spotlight - Becky Rose",
        "start": "2026-08-16T17:00:00",
        "end": "2026-08-16T21:00:00",
        "description": "Each week, we hand the spotlight to one of Denver's most celebrated bartenders — paired with a chef at the top of their game. 40 seats. A menu built around the pour. No two nights the same.",
        "location": "Adventure Time Bar",
        "color": "var(--sponsored)",
        "category": "Sponsored"
    },
    {
        "title": "Bartender Spotlight - Kevin Castillo",
        "start": "2026-08-09T17:00:00",
        "end": "2026-08-09T21:00:00",
        "description": "Each week, we hand the spotlight to one of Denver's most celebrated bartenders — paired with a chef at the top of their game. 40 seats. A menu built around the pour. No two nights the same.",
        "location": "Adventure Time Bar",
        "color": "var(--sponsored)",
        "category": "Sponsored"
    },
    {
        "title": "Lady Jane - 8 Year Anniversary Party",
        "start": "2026-08-11T18:00:00",
        "end": "2026-08-11T22:00:00",
        "description": "Celebrate Level 8 Arcade Night\u003cbr\u003eFeaturing arcade games, drag performances by Goodman L'Whor, 12 throw back cocktails, fabulous prizes, and limited edition T-Shirts",
        "location": "2021 West 32nd Avenue, Denver, Colorado, 80211",
        "color": "var(--party)",
        "category": "Party"
    },
    {
        "title": "Anniversary Drag Brunch @ The Devil's Drink",
        "start": "2026-08-16T11:00:00",
        "end": "2026-08-16T15:00:00",
        "description": "Join us as we celebrate The Devil's Drink's 3-Year Anniversary with an unforgettable drag show hosted by Chata Fuqup.\u003cbr\u003e\u003cbr\u003eThree years of unforgettable nights deserves a celebration. Join us as we celebrate The Devil's Drink's 3-Year Anniversary with DRAG hosted by Chata Fuqup. \u003cbr\u003e\u003cbr\u003e\u003ca href=\"https://www.eventbrite.com/e/anniversary-drag-brunch-at-the-devils-drink-tickets-1994390018232\"\u003eGet Tickets Here\u003c/a\u003e",
        "location": "1553 Platte St. Denver, CO",
        "color": "var(--party)",
        "category": "Party"
    },
    {
        "title": "The Devil's Drink 3 Year Anniversary",
        "start": "2026-08-22T20:00:00",
        "end": "2026-08-23T01:00:00",
        "description": "Dress to kill. Black tie, ballroom, and blood",
        "location": "1553 Platte St, Denver, CO 80202",
        "color": "var(--party)",
        "category": "Party"
    },
    {
        "title": "Happy Hour with Alexandre Gabriel",
        "start": "2026-08-20T16:00:00",
        "end": "2026-08-20T18:00:00",
        "description": "Alexandre Gabriel is the owner, Master Blender, and visionary behind Maison Ferrand, renowned for reviving traditional spirits through innovation and craftsmanship. His passion for rum has led him to collaborate with distilleries around the world, creating the acclaimed Planteray Rum portfolio and pioneering techniques such as double aging. \u003cbr\u003e\u003cbr\u003eThe Planteray Extremes collection represents the pinnacle of this philosophy: rare, limited edition rums that showcase exceptional terroirs, unique cask finishes, and bold experimentation, offering some of the most distinctive and collectible expressions in the world of rum.\u003cbr\u003e\u003cbr\u003eTickets: $10",
        "location": "Williams \u0026 Graham, 3160 Tejon St, Denver, CO",
        "color": "var(--sponsored)",
        "category": "Sponsored"
    },
    {
        "title": "RAISE THE BAR WITH REDBULL",
        "start": "2026-08-24T13:00:00",
        "end": "2026-08-24T14:00:00",
        "description": "Raise the Bar is a six week wellness experience designed to fit around the realities of Hospitality Industry schedules. Participants can attend twelve sessions over six weeks, alternating between Refuel and Fitness experiences. While participants are welcome to attend any sessions that fit their schedule, we encourage consistent participation throughout the six-week program to get the most out of the experience.\u003cbr\u003e\u003cbr\u003eRefuel Sessions are designed to help participants recharge through guided recovery, mobility work, restorative practices, and wellness-focused experiences.\u003cbr\u003e\u003cbr\u003eFitness Sessions focus on strength, endurance, and functional movement designed to support the demands of Hospitality.\u003cbr\u003e\u003cbr\u003eMore than a fitness program, Raise the Bar is an opportunity to connect with others across Denver’s Hospitality Industry community while building habits that continue long after the six weeks are over.\u003cbr\u003e\u003cbr\u003e\u003ca href=https://www.eventbrite.com/e/raise-the-bar-denver-tickets-1995903802000?aff=oddtdtcreator\u003eTickets\u003c/a\u003e",
        "location": "ONE8 Denver, 679 Sheridan Blvd, Denver, CO",
        "color": "var(--sponsored)",
        "category": "Sponsored"
    },
    {
        "title": "French Dip Off",
        "start": "2026-08-24T18:00:00",
        "end": "2026-08-24T20:00:00",
        "description": "Pig \u0026 Tiger  vs Ginger Pig",
        "location": "Pony Up 1808 Blake St, Denver, CO 80202",
        "color": "var(--competition)",
        "category": "Competition"
    },
    {
        "title": "Campari Day of Service",
        "start": "2026-09-15T11:00:00",
        "end": "2026-09-15T15:00:00",
        "description": "Campari Day of Service is Tuesday September 15th!  This year we will be returning to The Urban Farm.  The Urban Farm is a non-profit farm promoting youth and community education in Denver, Colorado.",
        "location": "Urban Farms 10200 Smith Rd, Denver, CO 80239",
        "color": "var(--sponsored)",
        "category": "Sponsored"
    },
    {
        "title": "Occidental Anniversary",
        "start": "2026-09-09T20:00:00",
        "end": "2026-09-10T02:00:00",
        "description": "Come for the party stay for SLC Punk and Repo Man movie night",
        "location": "Occidental 1950 W 32nd Ave Denver, CO 80211",
        "color": "var(--party)",
        "category": "Party"
    },
    {
        "title": "Stuart Going Away Party",
        "start": "2026-09-28T18:00:00",
        "end": "2026-09-28T23:00:00",
        "description": "Come by and as we bid farewell to a local Denver Legend",
        "location": "2021 W 32ND AVE DENVER, CO 80211",
        "color": "var(--party)",
        "category": "Party"
    },
    {
        "title": "RAISE THE BAR WITH REDBULL",
        "start": "2026-08-26T13:00:00",
        "end": "2026-08-26T14:00:00",
        "description": "Raise the Bar is a six week wellness experience designed to fit around the realities of Hospitality Industry schedules. Participants can attend twelve sessions over six weeks, alternating between Refuel and Fitness experiences. While participants are welcome to attend any sessions that fit their schedule, we encourage consistent participation throughout the six-week program to get the most out of the experience.\u003cbr\u003e\u003cbr\u003eRefuel Sessions are designed to help participants recharge through guided recovery, mobility work, restorative practices, and wellness-focused experiences.\u003cbr\u003e\u003cbr\u003eFitness Sessions focus on strength, endurance, and functional movement designed to support the demands of Hospitality.\u003cbr\u003e\u003cbr\u003eMore than a fitness program, Raise the Bar is an opportunity to connect with others across Denver’s Hospitality Industry community while building habits that continue long after the six weeks are over.\u003cbr\u003e\u003cbr\u003e\u003ca href=https://www.eventbrite.com/e/raise-the-bar-denver-tickets-1995903802000?aff=oddtdtcreator\u003eTickets\u003c/a\u003e",
        "location": "ONE8 Denver, 679 Sheridan Blvd, Denver, CO",
        "color": "var(--sponsored)",
        "category": "Sponsored"
    },
    {
        "title": "RAISE THE BAR WITH REDBULL",
        "start": "2026-08-31T13:00:00",
        "end": "2026-08-31T14:00:00",
        "description": "Raise the Bar is a six week wellness experience designed to fit around the realities of Hospitality Industry schedules. Participants can attend twelve sessions over six weeks, alternating between Refuel and Fitness experiences. While participants are welcome to attend any sessions that fit their schedule, we encourage consistent participation throughout the six-week program to get the most out of the experience.\u003cbr\u003e\u003cbr\u003eRefuel Sessions are designed to help participants recharge through guided recovery, mobility work, restorative practices, and wellness-focused experiences.\u003cbr\u003e\u003cbr\u003eFitness Sessions focus on strength, endurance, and functional movement designed to support the demands of Hospitality.\u003cbr\u003e\u003cbr\u003eMore than a fitness program, Raise the Bar is an opportunity to connect with others across Denver’s Hospitality Industry community while building habits that continue long after the six weeks are over.\u003cbr\u003e\u003cbr\u003e\u003ca href=https://www.eventbrite.com/e/raise-the-bar-denver-tickets-1995903802000?aff=oddtdtcreator\u003eTickets\u003c/a\u003e",
        "location": "ONE8 Denver, 679 Sheridan Blvd, Denver, CO",
        "color": "var(--sponsored)",
        "category": "Sponsored"
    },
    {
        "title": "RAISE THE BAR WITH REDBULL",
        "start": "2026-09-02T13:00:00",
        "end": "2026-09-02T14:00:00",
        "description": "Raise the Bar is a six week wellness experience designed to fit around the realities of Hospitality Industry schedules. Participants can attend twelve sessions over six weeks, alternating between Refuel and Fitness experiences. While participants are welcome to attend any sessions that fit their schedule, we encourage consistent participation throughout the six-week program to get the most out of the experience.\u003cbr\u003e\u003cbr\u003eRefuel Sessions are designed to help participants recharge through guided recovery, mobility work, restorative practices, and wellness-focused experiences.\u003cbr\u003e\u003cbr\u003eFitness Sessions focus on strength, endurance, and functional movement designed to support the demands of Hospitality.\u003cbr\u003e\u003cbr\u003eMore than a fitness program, Raise the Bar is an opportunity to connect with others across Denver’s Hospitality Industry community while building habits that continue long after the six weeks are over.\u003cbr\u003e\u003cbr\u003e\u003ca href=https://www.eventbrite.com/e/raise-the-bar-denver-tickets-1995903802000?aff=oddtdtcreator\u003eTickets\u003c/a\u003e",
        "location": "ONE8 Denver, 679 Sheridan Blvd, Denver, CO",
        "color": "var(--sponsored)",
        "category": "Sponsored"
    },
    {
        "title": "RAISE THE BAR WITH REDBULL",
        "start": "2026-09-07T13:00:00",
        "end": "2026-09-07T14:00:00",
        "description": "Raise the Bar is a six week wellness experience designed to fit around the realities of Hospitality Industry schedules. Participants can attend twelve sessions over six weeks, alternating between Refuel and Fitness experiences. While participants are welcome to attend any sessions that fit their schedule, we encourage consistent participation throughout the six-week program to get the most out of the experience.\u003cbr\u003e\u003cbr\u003eRefuel Sessions are designed to help participants recharge through guided recovery, mobility work, restorative practices, and wellness-focused experiences.\u003cbr\u003e\u003cbr\u003eFitness Sessions focus on strength, endurance, and functional movement designed to support the demands of Hospitality.\u003cbr\u003e\u003cbr\u003eMore than a fitness program, Raise the Bar is an opportunity to connect with others across Denver’s Hospitality Industry community while building habits that continue long after the six weeks are over.\u003cbr\u003e\u003cbr\u003e\u003ca href=https://www.eventbrite.com/e/raise-the-bar-denver-tickets-1995903802000?aff=oddtdtcreator\u003eTickets\u003c/a\u003e",
        "location": "ONE8 Denver, 679 Sheridan Blvd, Denver, CO",
        "color": "var(--sponsored)",
        "category": "Sponsored"
    },
    {
        "title": "RAISE THE BAR WITH REDBULL",
        "start": "2026-09-09T13:00:00",
        "end": "2026-09-09T14:00:00",
        "description": "Raise the Bar is a six week wellness experience designed to fit around the realities of Hospitality Industry schedules. Participants can attend twelve sessions over six weeks, alternating between Refuel and Fitness experiences. While participants are welcome to attend any sessions that fit their schedule, we encourage consistent participation throughout the six-week program to get the most out of the experience.\u003cbr\u003e\u003cbr\u003eRefuel Sessions are designed to help participants recharge through guided recovery, mobility work, restorative practices, and wellness-focused experiences.\u003cbr\u003e\u003cbr\u003eFitness Sessions focus on strength, endurance, and functional movement designed to support the demands of Hospitality.\u003cbr\u003e\u003cbr\u003eMore than a fitness program, Raise the Bar is an opportunity to connect with others across Denver’s Hospitality Industry community while building habits that continue long after the six weeks are over.\u003cbr\u003e\u003cbr\u003e\u003ca href=https://www.eventbrite.com/e/raise-the-bar-denver-tickets-1995903802000?aff=oddtdtcreator\u003eTickets\u003c/a\u003e",
        "location": "ONE8 Denver, 679 Sheridan Blvd, Denver, CO",
        "color": "var(--sponsored)",
        "category": "Sponsored"
    },
    {
        "title": "RAISE THE BAR WITH REDBULL",
        "start": "2026-09-14T13:00:00",
        "end": "2026-09-14T14:00:00",
        "description": "Raise the Bar is a six week wellness experience designed to fit around the realities of Hospitality Industry schedules. Participants can attend twelve sessions over six weeks, alternating between Refuel and Fitness experiences. While participants are welcome to attend any sessions that fit their schedule, we encourage consistent participation throughout the six-week program to get the most out of the experience.\u003cbr\u003e\u003cbr\u003eRefuel Sessions are designed to help participants recharge through guided recovery, mobility work, restorative practices, and wellness-focused experiences.\u003cbr\u003e\u003cbr\u003eFitness Sessions focus on strength, endurance, and functional movement designed to support the demands of Hospitality.\u003cbr\u003e\u003cbr\u003eMore than a fitness program, Raise the Bar is an opportunity to connect with others across Denver’s Hospitality Industry community while building habits that continue long after the six weeks are over.\u003cbr\u003e\u003cbr\u003e\u003ca href=https://www.eventbrite.com/e/raise-the-bar-denver-tickets-1995903802000?aff=oddtdtcreator\u003eTickets\u003c/a\u003e",
        "location": "ONE8 Denver, 679 Sheridan Blvd, Denver, CO",
        "color": "var(--sponsored)",
        "category": "Sponsored"
    },
    {
        "title": "RAISE THE BAR WITH REDBULL",
        "start": "2026-09-16T13:00:00",
        "end": "2026-09-16T14:00:00",
        "description": "Raise the Bar is a six week wellness experience designed to fit around the realities of Hospitality Industry schedules. Participants can attend twelve sessions over six weeks, alternating between Refuel and Fitness experiences. While participants are welcome to attend any sessions that fit their schedule, we encourage consistent participation throughout the six-week program to get the most out of the experience.\u003cbr\u003e\u003cbr\u003eRefuel Sessions are designed to help participants recharge through guided recovery, mobility work, restorative practices, and wellness-focused experiences.\u003cbr\u003e\u003cbr\u003eFitness Sessions focus on strength, endurance, and functional movement designed to support the demands of Hospitality.\u003cbr\u003e\u003cbr\u003eMore than a fitness program, Raise the Bar is an opportunity to connect with others across Denver’s Hospitality Industry community while building habits that continue long after the six weeks are over.\u003cbr\u003e\u003cbr\u003e\u003ca href=https://www.eventbrite.com/e/raise-the-bar-denver-tickets-1995903802000?aff=oddtdtcreator\u003eTickets\u003c/a\u003e",
        "location": "ONE8 Denver, 679 Sheridan Blvd, Denver, CO",
        "color": "var(--sponsored)",
        "category": "Sponsored"
    }
];
