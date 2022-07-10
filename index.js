//deal with the sidebar

//the notification pop up showing
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        menuItems.forEach((item) => {
            item.classList.remove("active");
        })
        item.classList.add("active");
        if (item.id === "notification") {
            document.querySelector(".notification-popup").style.display = "block";
            document.querySelector("#notification .notification-count").style.display = "none";
        } else {
            document.querySelector(".notification-popup").style.display = "none";
        }
    })
});

// the messages showing
const msNotification = document.querySelector("#messages-notifications");
const msBox = document.querySelector(".messages");
const message = msBox.querySelectorAll(".message");
const msSearch = document.querySelector("#message-search");





msNotification.addEventListener("click", () => {
    msBox.style.boxShadow = '0 0 1rem var(--color-primary)';
    document.querySelector("#messages-notifications .notification-count").style.display = "none";
    let handle = setTimeout(() => {
        msBox.style.boxShadow = 'none';
    }, 2000);
})


const searchMs = function() {

    const val = msSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('.message-body h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = "flex";
        } else {
            chat.style.display = "none";
        }
    })
}
msSearch.addEventListener('keyup', searchMs);

// themes ===================================================

const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
// to open
const openTheModel = () => {
    themeModel.style.display = "grid"
}


theme.addEventListener('click', openTheModel);

// to close
const closeTheModel = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModel.style.display = "none"
    }
}

themeModel.addEventListener('click', closeTheModel);

const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
// font
//remove active 

const removeSizeActive = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    });

}



fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        let fontSize;
        removeSizeActive();
        size.classList.toggle('active');
        //changing size when clicking on the span 
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        };
        //changinh the html ele size
        document.querySelector('html').style.fontSize = fontSize;
    });
});

// color

const removeColorActive = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active');
    });

}

const colorPalette = document.querySelectorAll('.choose-color span');
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;

        removeColorActive();
        color.classList.toggle('active');

        if (color.classList.contains('color-1')) {
            primaryHue = 525;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


// changing bg

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');
//
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
};
// ___________--bg2
bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
});
// ___________--bg2
bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBG();
});
// ___________--bg1
bg1.addEventListener('click', () => {
    bg1.classList.add('active');
    bg3.classList.remove('active');
    bg2.classList.remove('active');
    window.location.reload();
});