const buttons = document.querySelectorAll("#controls button");

let container = document.querySelector('.content');


let page = [
    {
        heading: 'HydroPower',
        body: 'Hydropower is using water to power machinery or make electricity. Water constantly moves through a vast global cycle, evaporating from lakes and oceans, forming clouds, precipitating as rain or snow, then flowing back down to the ocean. The energy of this water cycle, which is driven by the sun, can be tapped to produce electricity or for mechanical tasks like grinding grain. Hydropower uses a fuel—water—that is not reduced or used up in the process. Because the water cycle is an endless, constantly recharging system, hydropower is considered a renewable energy.("How Hydropower Works", 2021)',
        imgUrl: './img/hydropower.png',
        imgAlt: 'Content 1 Alternative Text'
    },
    {
        heading: 'Wind',
        body: 'In the U.S. 8% of our energy generating capacity comes from wind turbines—that’s more than any other renewable resource—and wind power has more than tripled over the past decade. Everyday Einstein Sabrina Stierwalt. (2019, August 8). How does wind energy work? Scientific American.',
        imgUrl: './img/wind.png',
        imgAlt: 'Content 2 Alternative Text'
    },
    {
        heading: 'Solar',
        body: 'Solar power works by converting light from the sun into electricity. This electricity can then be used in your home or exported to the grid when it’s not needed. This is done by installing solar panels on your roof which generate DC (Direct Current) electricity. This is then fed into a solar inverter which converts the DC electricity from your solar panels into AC (Alternating Current) electricity.',
        imgUrl: './img/solar.png',
        imgAlt: 'Content 3 Alternative Text'
    }
];




function preloader() {
    const imagesList = [
        './img/hydropower.png',
        './img/wind.png',
        './img/solar.png'
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);


};
window.addEventListener("load", preloader);

content.innerHTML = `
            <div>
                <h2>${page[0].heading}</h2>
                < div class = "bodyContainer" >
                    <
                    img src = "${page[0].imgUrl}"
                alt = “$ {
                    page[0].imgAlt
                }
                "> <
                p > $ {
                        page[0].body
                    } < /p> <
                    /div>
            </div>`;


function clickButton(e) {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].hasAttribute('id')) {
            buttons[i].removeAttribute('id');
        }
    }

    let currentPage = e.target;
    currentPage.setAttribute("id", "active");




    for (let a = 0; a < buttons.length; a++) {
        buttons[a].addEventListener('click', clickButton);
        if (buttons[a].hasAttribute('id')) {
            content.innerHTML = `
            <div>
                <h2>${page[a].heading}</h2>
                
                    <img src=${page[a].imgUrl} alt=“${page[a].imgAlt}">
                    <p>${page[a].body}</p>
                
            </div>`;
        }
    }



};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clickButton);
}
