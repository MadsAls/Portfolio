// templates/projekter.js
var Slides = (function () {
    function Slides() {
        const slides = [
            {
                overskrift: "2024 - i 12 uger",
                work: 'VS Automatic',
                ikon: "img/ikoner/work.svg",
                tekst_overskrift: "Multimediedesigner-Praktik",
                tekst: "Jeb var i praktik ved VS Automatic. Som praktikant arbejdede jeg med grafisk design til web og video, og arbejdet med programmerne i Adobe pakke som: <br> - Photoshop <br> - Illustrator <br> - After Effects <br> - Premiere Pro",
            },
            {
                overskrift: "2023 - 2025",
                work: 'Erhvervsakademi Aarhus',
                ikon: "img/ikoner/skole.svg",
                tekst_overskrift: "Multimediedesigner",
                tekst: "Som elev ved Erhvervsakademi Aarhus som Multimediedesigner er jeg igang med at lærer forskellige metoder til at opbygge hjemmesider og andet content, så som: <br> - Design <br> - UX, UI <br> - Programmering i HTML, CSS og JavaScript",
            },
            {
                overskrift: "2022 - 2023",
                work: 'Capra Robotics',
                ikon: 'img/ikoner/work.svg',
                tekst_overskrift: "Robot tekniker",
                tekst: "Som robot tekniker ved Capra Robotics, sad jeg i Hardware afdelingen, hvor jeg reparede og optimeret elektroniske systemer i deres robotter. ",
            },
            {
                overskrift: "2021 - 2022",
                work: 'Forsvarets',
                ikon: 'img/ikoner/work.svg',
                tekst_overskrift: "Elektronikfagtekniker svend",
                tekst: "Som svend i Forsvarets Vedligeholdelsestjeneste Sensor- & optronikværkstedet Frederikshavn (den civile del). MCM afdeling (Mine Counter Measures). Hvor mine arbejdes opgaver var: <br> Fejlfinding, reparation og test af undervandsdroner. Derudover uddannelsesansvarlig for vores to nye lærlinge og sørger for at de i det daglige får relevante opgaver og fungeret som mentor for dem.",
            },
            {
                overskrift: "2017 - 2021",
                work: 'Aarhus Tech',
                ikon: 'img/ikoner/skole.svg',
                tekst_overskrift: "Elektronikfagtekniker",
                tekst: "Gik på Aarhus Tech som elektronikfagtekniker og kom i lærer ved Forsvarets Vedligeholdelsestjeneste som civil tekniker lærling, hvor jeg hjalp flåden med at fixse deres ødelagte udstyr. Arbejdet har været på Flådestationen, på deres værksted og på skibe samt rejsearbejde på andre af forsvarets kaserner. ",
            },
            {
                overskrift: "2016 - 2017",
                work: 'Bilka Tilst',
                ikon: 'img/ikoner/work.svg',
                tekst_overskrift: "Deltidsarbejder",
                tekst: "Arbejdet i Bilka Tilst i  den Kolonial afdeling, som vare opfylder på deltid.",
            },

        ];

        const template = `
                  ${slides
                .map(
                    (slide) => `
                                <div class="swiper-slide">
                                    <div class="swiper-content">
                                        <h4 class="swiper-content__overskrift">${slide.overskrift}</h4>
                                        <p class="swiper-content__work">${slide.work}</p>
                                        <div class="swiper-content__streg">
                                            <div class="swiper-content__ikon">
                                                <img src="${slide.ikon}" alt="ikon">
                                            </div>
                                        </div>
                                        <div class="swiper-content__tekst">
                                        <h3 class="swiper-content__workOverskrift">${slide.tekst_overskrift}</h3>
                                            <p>${slide.tekst}</p>
                                        </div>
                                    </div>
                                </div>
                    `
                )
                .join("")}
                      `;

        return template;
    }

    return {
        Slides: Slides,
    };
})();