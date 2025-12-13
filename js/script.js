// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json)) 

// fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
//     .then(res => res.json())
//     .then(json => console.log(json))
let totalClickCount = 0;
function loadAllData() {
    const url = 'https://openapi.programming-hero.com/api/retro-forum/posts';
    fetch(url)
        .then(res => res.json())
        .then(data => showAllData(data))

}

function showAllData(data) {
    const containerDiv = document.getElementById('postContainer');
    for (const post of data.posts) {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<div class="flex p-4 border rounded-[20px]  bg-[#F2F2FF] m-[15px]">
        <div class="photoPart w-[15vw]">
        <img src="${post.image}">
        </div>
        <div class="ml-[20px] textPart w-[45vw] ">
        <div class="flex gap-8">
        <span class="text-base">#${post.category}</span>
        <span class="text-base">Author:${post.author.name}</span>
        </div>
        <h2 class="text-2xl font-semibold mb-[10px]">${post.title}</h2>
        <p>${post.description}</p>
        -----------------------------------------------------------------------------------
        <div class="flex">
        <div class="flex gap-4"> 
        <div class="flex gap-2"><img src="images/msg.png"> <span>${post.comment_count}</span> </div>
        <div class="flex gap-2"><img src="images/eye.png"> <span>${post.view_count}</span> </div>
        <div class="flex gap-2"><img src="images/time.png"> <span>${post.posted_time}</span> </div>
        </div>
        <div>
        <button onclick="showPostDetails('${post.title}', ${post.view_count})"><img class="ml-[300px]" src="images/letter.png"></button>
        


        </div>
        </div>
        </div>
    </div>
    `;
        containerDiv.appendChild(postDiv);
    }

}

function showPostDetails(title, viewCount) {
    totalClickCount++;
    const modalDiv = document.getElementById('modalContainer');
    const tit = title;
    const vCount = viewCount;
    const postDiv2 = document.createElement('div');
    postDiv2.innerHTML = `<div class="flex bg-[#FFF] p-4 m-2 rounded-[20px] items-center">

    <div class=" w-[16vw] ">
    <h4>${title}</h4>
    </div>

    <div class="flex items-center w-[9vw] ml-[10px]"> 
    <img src="images/eye.png">
    <span class="ml-[5px]">${viewCount}</span>
    </div>
     
    </div>
    `;
    modalDiv.appendChild(postDiv2);
    
}

function loadPost(){
    const url = 'https://openapi.programming-hero.com/api/retro-forum/latest-posts';
    fetch(url)
        .then(res => res.json())
        .then(data => showLatestPost(data))
}

function showLatestPost(Data){
    const latestPostContainerDiv = document.getElementById('latestPostContainer');
    for(const info of Data){
        const lpdiv = document.createElement('div');
        lpdiv.innerHTML = `
        <div class=" p-4 rounded-[10px]">
            <img class="mb-[5px]" src="${info.cover_image}">
            <span>${info.author.posted_date}</span>
            <h3 class="text-xl font-bold mb-[5px]">${info.title}</h3>
            <p class="text-medium mb-[15px]">${info.description}</p>
            <div class="flex items-center">
            <div class="photoPart">
            <img class="h-[80px]" src="${info.profile_image}">
            </div>
            <div class="textPart ml-[20px]">
            <h3 class="font-bold">${info.author.name}</h3>
            <p class="text-medium">${info.author.designation}</p>
            </div>
            </div>
        </div>
        `;

        // console.log(info.description);
        latestPostContainerDiv.appendChild(lpdiv);
    }
    
    
}



loadAllData();
loadPost();
