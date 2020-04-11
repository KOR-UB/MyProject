const header = document.querySelector("header");
        const menuitem = document.querySelectorAll(".menuitem");
        const sectionContainer = document.querySelector(".section-container");
        const sectionList = document.querySelectorAll(".sectionList"); 
        const closeList = document.querySelector(".closeList");
        // const objitem =[
        //     {
        //         id:1,
        //         name: "아이스 체리 블라썸",
        //         check: false,
        //         img: "./img/SVG/Ice/01_Ice_Cherry_Blossom_Latte.svg"
        //     },
        //     {
        //         id:2,
        //         name: "핫 체리 블라썸",
        //         check: false,
        //         img: "./img/SVG/Hot/02_hot_Cherry_Blossom_Latte.svg"
        //     },
        //     {
        //         id:3,
        //         name: "아이스 브라우니 쇼콜라",
        //         check: false,
        //         img: "./img/SVG/Hot/03_Ice_Brownie_Chocolate.svg"
        //     },
        //     {
        //         id:4,
        //         name: "핫 브라우니 쇼콜라",
        //         check: false,
        //         img: "./img/SVG/Hot/04_Hot_Brownie_Chocolate.svg"
        //     },
        //     {
        //         id:5,
        //         name: "제주청귤 오리지널",
        //         check: false,
        //         img: "./img/SVG/Tangerine/05_Jeju_Green_Tangerine_Tea.svg"
        //     },
        //     {
        //         id:6,
        //         name: "제주청귤 블라썸",
        //         check: false,
        //         img: "./img/SVG/Tangerine/06-Jeju_Green_Tangerine_Blossom.svg"
        //     },
        //     {
        //         id:7,
        //         name: "석류 오리지널",
        //         check: false,
        //         img: "./img/SVG/Pomegranate/07_Pomegranate_Tea.svg"
        //     },
        //     {
        //         id:8,
        //         name: "석류 애플라임",
        //         check: false,
        //         img: "./img/SVG/Pomegranate/08_Pomegranate_Apple_Lime.svg"
        //     }
        // ]
        closeList.addEventListener("click",function(event) //화살표 눌러서 빠져나오도록 구현
        {
            closeList.classList.toggle("active");
            sectionContainer.classList.toggle("active");
            Array.from(sectionList).forEach(sectionList =>
            {
                if(sectionList.classList == "sectionList List1 active")
                {
                    sectionList.classList.toggle("active");
                }
                else if(sectionList.classList == "sectionList List2 active")
                {
                    sectionList.classList.toggle("active");
                }
                if(sectionList.classList == "sectionList List3 active")
                {
                    sectionList.classList.toggle("active");
                }
                else if(sectionList.classList == "sectionList List4 active")
                {
                    sectionList.classList.toggle("active");
                }
                if(sectionList.classList == "sectionList List5 active")
                {
                    sectionList.classList.toggle("active");
                }
                else if(sectionList.classList == "sectionList List6 active")
                {
                    sectionList.classList.toggle("active");
                }
                if(sectionList.classList == "sectionList List7 active")
                {
                    sectionList.classList.toggle("active");
                }
                else if(sectionList.classList == "sectionList List8 active")
                {
                    sectionList.classList.toggle("active");
                }
                else
                {
                    console.log("너무 하드코딩이지만 일단 성공");
                }
            })
            // Array.from(sectionList).forEach(sectionList => sectionList.classList.toggle("active"));
        });
        Array.from(menuitem).forEach(item => item.addEventListener("click", function(event) //아이템 클릭 영역
        {
            const checkText = event.target.firstElementChild.innerText;
            switch(checkText)
            {
                case "아이스 체리 블라썸":         
                sectionList[0].classList.toggle("active");
                break;
                case "핫 체리 블라썸" :
                sectionList[1].classList.toggle("active");
                break;
                case "아이스 브라우니 쇼콜라" :
                sectionList[2].classList.toggle("active");
                break;
                case "핫 브라우니 쇼콜라" :
                sectionList[3].classList.toggle("active");
                break;
                case "제주청귤 오리지널" :
                sectionList[4].classList.toggle("active");
                break;
                case "제주청귤 블라썸" :
                sectionList[5].classList.toggle("active");
                break;
                case "석류 오리지널" :
                sectionList[6].classList.toggle("active");
                break;
                case "석류 애플라임" :
                sectionList[7].classList.toggle("active");
                break;
                default :
                console.log("놉");
            }
            item.classList.toggle("active");
        }));
        window.addEventListener("scroll", function() //스크롤 좌표
        {
            header.classList.toggle("sticky", window.scrollY > 0);
        })
        function toggle(e) //헤더 네비 토글
        {
            header.classList.toggle("active");
        }
        window.addEventListener("keydown", function(event) //키 상호작용
        {
            switch(event.keyCode)
            {
                case 9: //텝
                console.log("텝 눌림");
                break;
                case 27: //esc
                console.log("esc 눌림");
                break;
                case 37: //좌측 화살표
                console.log("좌측 눌림");
                break;
                case 38: //위 화살표
                console.log("위 눌림");
                break;
                case 39: //우측 화살표
                console.log("우측 눌림");
                break;
                case 40: //아래 화살표
                console.log("아래 눌림");
                break;
                case 13: //엔터
                console.log("엔터 눌림");
                break;
                case 16: //시프트
                console.log("시프트 눌림");
                break;
                default :
                console.log("놉");
            }
        });