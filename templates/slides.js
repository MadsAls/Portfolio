// templates/projekter.js
var Slides = (function () {
    function Slides() {
        const slides = [
            {
                overskrift: "En overskrift",
                work: 'skole',
                ikon: "img/ikoner/skole_ikon.png",
                tekst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, repudiandae?",
            },
            {
                overskrift: "En overskrift",
                work: 'skole',
                ikon: 'img/placeholder.jpg',
                tekst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, repudiandae?",
            },
            {
                overskrift: "En overskrift",
                work: 'skole',
                ikon: 'img/placeholder.jpg',
                tekst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, repudiandae?",
            },
            {
                overskrift: "En overskrift",
                work: 'skole',
                ikon: 'img/placeholder.jpg',
                tekst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, repudiandae?",
            },
            {
                overskrift: "En overskrift",
                work: 'skole',
                ikon: 'img/placeholder.jpg',
                tekst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, repudiandae?",
            },
            {
                overskrift: "En overskrift",
                work: 'skole',
                ikon: 'img/placeholder.jpg',
                tekst: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, repudiandae?",
            },
        ];

        const template = `
                  ${slides
                .map(
                    (slide) => `
                                <div class="swiper-slide">
                                    <div class="swiper-content">
                                        <h1 class="swiper-content__overskrift">${slide.overskrift}</h1>
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