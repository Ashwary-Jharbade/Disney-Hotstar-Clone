const getEle = (ele,cls) => {
    let obj = document.createElement(ele);
    obj.classList = cls;
    return obj;
} 

const createCardNode = (url,name,info,desc,watch,list) => {
    let ele = "div";
    let  ccobj = getEle(ele,"one card-container");
    let  cibobj = getEle(ele,"card-img-box");
    let img = getEle("img","");
    img.src = url;
    let coobj = getEle("div","card-overlay f-500");
    let mdb = getEle("div","movie-db");
    let mnobj = getEle("div","movie-name");
    mnobj.innerHTML = name;
    let miobj = getEle("div","movie-info");
    miobj.innerHTML = info;
    let mdobj = getEle("div","movie-desc");
    mdobj.innerHTML = desc;
    let mwobj = getEle("div","movie-watch");
    mwobj.innerHTML = `<a href=""><span class="fa fa-play"></span> ${watch}</a>`;
    let mlobj = getEle("div","movie-list");
    mlobj.innerHTML = `<a href=""><span class="fa fa-plus"></span> ${list}</a>`;
    mdb.append(mnobj)
    mdb.append(miobj)
    mdb.append(mdobj)
    mdb.append(mwobj)
    mdb.append(mlobj)
    coobj.append(mdb)
    cibobj.append(img)
    cibobj.append(coobj)
    ccobj.append(cibobj)
    return ccobj
}

const createVideoCard = (url,name,desc,list) => {
    let ele = "div";
    let  ccobj = getEle(ele,"video-card-container");
    let  cibobj = getEle(ele,"video-card-img-box");
    let img = getEle("img","");
    img.src = url;
    let coobj = getEle("div","video-card-overlay f-500");
    let mdb = getEle("div","movie-db");
    let mnobj = getEle("div","movie-name");
    mnobj.innerHTML = `<a href=""><span class="fa fa-play"></span> ${name}</a>`;
    let mdobj = getEle("div","movie-desc");
    mdobj.innerHTML = desc;
    let mlobj = getEle("div","movie-list");
    mlobj.innerHTML = `<a href=""><span class="fa fa-plus"></span> ${list}</a>`;
    mdb.append(mnobj)
    mdb.append(mdobj)
    mdb.append(mlobj)
    coobj.append(mdb)
    cibobj.append(img)
    cibobj.append(coobj)
    ccobj.append(cibobj)
    return ccobj
}

window.onload = (event) => {
    let name = "Guess Name"
    let info = "2hr 13min, Action,Historical, Drame, Suspense, English, 20??";
    let desc = "This is just a dummy movie deascription";
    let watch = "WATCH MOVIE";
    let list = "ADD TO WATCHLIST";
    let imgList = ["https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5763/1045763-v-1d9f41f00c89",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/147/750147-v",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1684/1011684-v-374e17c7e183",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7809/877809-v",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9292/1039292-v-6c2f3cb977d6",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3085/723085-v",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7416/957416-v",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9724/1049724-v-c0098003e237",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6941/1036941-v-b7f0f9abf579",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7509/827509-v",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/231/940231-v",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1456/771456-v",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7290/767290-v",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3095/733095-v",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5763/1045763-v-1d9f41f00c89",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/147/750147-v",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6536/846536-v",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1684/1011684-v-374e17c7e183",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7809/877809-v",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9292/1039292-v-6c2f3cb977d6",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3085/723085-v"
    ]
    let videoList = ["https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7565/1047565-h-127ac12cc56a",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8334/1048334-h-ef679316d08d",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7632/1047632-h-cc1258dc8f0d",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6209/1046209-h-762f8f2333d9",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9665/1049665-h-0668f578814d",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8187/1048187-h-dee9740ed55f",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9702/1049702-h-0af54a6d77f7",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8776/1048776-h-df0e0b0650ea",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8303/1048303-h-d58a00e077df",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7565/1047565-h-127ac12cc56a",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8334/1048334-h-ef679316d08d",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7632/1047632-h-cc1258dc8f0d",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6209/1046209-h-762f8f2333d9",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9665/1049665-h-0668f578814d",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8187/1048187-h-dee9740ed55f",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/9702/1049702-h-0af54a6d77f7",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8776/1048776-h-df0e0b0650ea",
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8303/1048303-h-d58a00e077df"
    ]

    let obj = document.querySelectorAll(".cards-wrapper");
    obj.forEach( item => {
        imgList.forEach( x => {
            let node = createCardNode(x,name,info,desc,watch,list)
            item.append(node.cloneNode(true))
        })
    })

    
    
    let vobj = document.querySelectorAll(".video-cards-wrapper");
    vobj.forEach( item => {
        videoList.forEach( x => {
            let vnode = createVideoCard(x,name,desc,list)
            item.append(vnode.cloneNode(true))
        })
    })
}