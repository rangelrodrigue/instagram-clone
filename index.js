const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 210,
        liked: false
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 43,
        liked: false
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        liked: false
    }
]

const main= document.querySelector("main")
render()
function render(){
let cards = ""
    for (let i = 0; i < posts.length; i++){
        let separation
        let last= posts.length - 1
        if (i === last){
            separation= "not-saparation"
        }
        else{
            separation= ""
        }
    cards+= `
    <div class="card ${separation}">
                    <div class="header">
                        <div class="container-two">
                            <img class="post-user-avatar profile" src="${posts[i].avatar}">
                            <div class="description">
                                <h3>${posts[i].name}</h3>
                                <p class="small-text">${posts[i].location}</p>
                            </div>
                        </div>
                    </div>
                    <div class="content">
                        <img class="img-post" src="${posts[i].post}">
                    </div>
                    <div class="footer">
                        <div class="interaction">
                            <div class="heart small" onclick= clicked(${i})></div>
                            <img class="comment small" src="images/icon-comment.png">
                            <img class="dm small" src="images/icon-dm.png">
                        </div>
                        <div class="likes-comments">
                        <p class="small-text bold"><span class="likes">${posts[i].likes}</span> likes</p>
                        <p><span class="commenter-name">${posts[i].username}</span> ${posts[i].comment}</p>
                        </div>
                        </div>
                        </div>
                        `
                    }
                    main.innerHTML+= cards
}
function clicked(index){
let likes = document.querySelectorAll(".likes")
for (let i = 0; i < likes.length; i++){
    if (i == index){
        if(!posts[index].liked){
            posts[index].likes++
            likes[i].textContent = posts[index].likes
            posts[index].liked = true
            heart(index)
            return
        }
        else{
            posts[index].likes--
            likes[i].textContent--
            posts[index].liked = false
            heart(index)
            return
        }
    }
}
}
function heart(index){
    let hearts = document.querySelectorAll(".heart")
for (let i = 0; i < hearts.length; i++){
    if (i == index){
        if(posts[index].liked){
            console.log("rico")
            console.log(hearts[i].classList)
            hearts[i].classList.add("active")
            return
        }
        else{
            console.log("no tan rico")
            hearts[i].classList.remove("active")
        }
    }
}
}