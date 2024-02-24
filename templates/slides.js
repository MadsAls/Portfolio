// templates/projekter.js
var Slides = (function () {
    function Slides() {
        const slides = [
            {
                overskrift: "Aug 2023 - ",
                work: 'Skolen her',
                ikon: "img/ikoner/skole.svg",
                tekst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, repudiandae?",
            },
            {
                overskrift: "Aug 2022 - Jun 2023",
                work: 'Arbejde navn',
                ikon: 'img/ikoner/work.svg',
                tekst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, repudiandae?",
            },
            {
                overskrift: "Aug 2021 - Jun 2022",
                work: 'Arbejde navn',
                ikon: 'img/ikoner/work.svg',
                tekst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, repudiandae?",
            },
            {
                overskrift: "Aug 2018 - Jun 2021",
                work: 'Skolen her',
                ikon: 'img/ikoner/skole.svg',
                tekst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, repudiandae?",
            },
            {
                overskrift: "Aug 2017 - Jun 2017",
                work: 'Højskole navn',
                ikon: 'img/ikoner/musik.svg',
                tekst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, repudiandae?",
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