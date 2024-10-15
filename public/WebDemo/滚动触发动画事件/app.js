
window.onload = () => {
    let imageURL = {
        LandRover: "https://images.unsplash.com/photo-1502489597346-dad15683d4c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
        AstonMartin: "https://images.unsplash.com/photo-1618486613525-c694bf152b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
        Bugatti: "https://images.unsplash.com/photo-1627454820516-dc767bcb4d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        Lotus: "https://images.unsplash.com/photo-1557053964-88a63878267a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2363&q=80",
        Mustang: "https://images.unsplash.com/photo-1611016186353-9af58c69a533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80",
        Audi: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
        Benz: "https://images.unsplash.com/photo-1501066927591-314112b5888e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
        Volvo: "https://images.unsplash.com/photo-1557323137-bd6bd20fe022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    }

    let imgItems = [...document.querySelectorAll('.img-wrap')];
    let titles = [...document.querySelectorAll('h2')];

    console.log(titles);

    let options = {
        rootMargin: '0px',
        threshold: 0.2, // 0.2 means 50% of the element is visible
    }

    let setItemActive = ((entries) => {
        console.log(entries);
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        })
    })

    // 交叉相交观察器
    // let observer = new IntersectionObserver((entries, observer) => { });

    let observer = new IntersectionObserver(setItemActive, options);

    let imageURLArray = Object.values(imageURL);

    imgItems.forEach((item, index) => {
        item.children[0].style.backgroundImage = `url(${imageURLArray[index]})`;
        index % 2 === 0 ? item.style.left = '50%' : item.style.left = '5%';
        observer.observe(item);
    })

    titles.forEach((title, index) => {
        index % 2 === 0 ? title.style.left = '15%' : title.style.right = '15%';
        index % 2 === 0 ? title.style.textAlign = 'left' : title.style.textAlign = 'right';
        observer.observe(title);
    })
}