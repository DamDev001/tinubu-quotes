const qoutesContainer = document.querySelector(".quotes-container");
const full_quotes = document.querySelector(".full-quotes")
const back = document.querySelector(".back")
const big_quotes = document.querySelector(".big-quotes .quote")
const copyToClipboard = document.querySelector(".copyToClipboard")
const bulb = document.querySelector(".bulb")

const qoutesArray = [
    "WE ARE COMMITTED TO SUSTAINABLE INITIATIVES AND PROGRAMS THAT WILL STIMULATE AND REJUVENATE THE ECONOMY WITHOUT CAUSING INFLATION.",

    "THE HIGH EXPECTATION OF NEC AS A VERITABLE SOURCE OF ARTICULATING POLICIES AND PROGRAMS THAT ARE PEOPLE ORIENTED CANNOT BE OVEREMPHASIZED.",

    "IT IS ALSO EVIDENT THAT THE TASK OF GROWING OUR ECONOMY IS QUITE ENORMOUS, BUT WE WILL WORK EARNESTLY TO SECURE SUSTAINABLE WAYS OF HARNESSING GROWTH POTENTIALS OF EACH STATE TO COMPLEMENT FEDERAL GOVERNMENT EFFORTS",

    "IT IS ALSO REASSURING TO NOTE THAT STEPS HAVE BEEN TAKEN IN THE PAST TO STRENGTHEN THE EFFECTIVENESS OF NEC IN ITS ROLE AS PRIME ADVISER ON DEVELOPMENTS IN THE ECONOMY",

    "THE NEC HAS THE MANDATE TO ADVISE THE PRESIDENT CONCERNING THE ECONOMIC AFFAIRS OF THE FEDERATION AND, IN PARTICULAR, ON APPROPRIATE MEASURES FOR THE COORDINATION OF THE ECONOMIC PLANS AND PROGRAMS OF GOVERNMENT MINISTRIES, DEPARTMENTS AND AGENCIES (MDAS)",

    "THE PLANS AND IDEAS WE HAVE PRESENTED UNDERSCORE OUR CONFIDENCE IN OUR ABILITY TO MEET THE CHALLENGES OF THE DAY AND PAVE THE WAY FOR A BETTER FUTURE",

    "THIS YEAR, WE HELD THE SEVENTH IN THE CYCLE OF ELECTIONS THAT HAVE BECOME SACRED RITUALS OF OUR DEMOCRATIC PRACTICE IN THIS DISPENSATION SINCE 1999.",

    "THOSE WHO CANNOT ENDURE AND ACCEPT THE PAIN OF DEFEAT IN ELECTIONS DO NOT DESERVE THE JOY OF VICTORY WHEN IT IS THEIR TURN TO TRIUMPH.",

    "PAINFULLY, I HAVE ASKED YOU, MY COMPATRIOTS, TO SACRIFICE A LITTLE MORE FOR THE SURVIVAL OF OUR COUNTRY. FOR YOUR TRUST AND BELIEF IN US, I ASSURE YOU THAT YOUR SACRIFICE SHALL NOT BE IN VAIN",

    "On my part and that of my administration, I pledge to renew our commitment to diligently fulfilling every component of our electoral pact with the people - the Renewed Hope agenda."

];

for (let i = 0; i < qoutesArray.length; i++) {

    const qoutes = qoutesArray[i];
    const qoute = document.createElement("div");
    qoute.classList = "quote";
    qoute.innerHTML = `&quot;` + qoutes + `&quot;`
    qoutesContainer.appendChild(qoute)
}

const realQuotes = document.querySelectorAll(".quotes-container .quote")


for (let i = 0; i < realQuotes.length; i++) {
    const element = realQuotes[i];

    element.addEventListener("click", () => {
        full_quotes.style.display = "block"
        big_quotes.innerHTML = element.innerHTML
    })

    copyToClipboard.addEventListener("click", () =>{
        // element.select()
        // element.setSelectionRange(0,9999)
        //
    })
}

back.addEventListener("click", () => {
    full_quotes.style.display = "none"
})

bulb.addEventListener("click", () =>{
    document.querySelector(".tip-container").style.display = "flex"
})

document.querySelector(".back-to-menu").addEventListener("click", () =>{
    document.querySelector(".tip-container").style.display = "none"
})