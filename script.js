const loadCategories = () => {
  fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then((res) => res.json())
    .then((data) => displayCategories(data.data.news_category));
};
const displayCategories = (categories) => {
 

  //create div for all categories
  
  const categoriesContainer = document.getElementById("categories-container");
  categories.forEach((category) => {

    // console.log(category.category_name)
    
    const categoriesDiv = document.createElement("div");
    categoriesDiv.classList.add("m-auto");
    
    categoriesDiv.innerHTML = `

        <h6 onclick="loadNews('${category.category_id}' , '${category.category_name}')" class=" icon-link-hover">${category.category_name} </h6>
        `;
    categoriesContainer.appendChild(categoriesDiv);
   
  });
};
const loadNews = (category_id , category_name) => {
  url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
  
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayNews(data.data , category_name));
};
const displayNews = (data , category_name) => {
  // console.log(category_name) 
  const itemDiv = document.getElementById('itemDiv')
  itemDiv.classList.remove('d-none')

  const itemField = document.getElementById('totalItem')
  itemField.value = `${data.length} items found for ${category_name}` 
  const newsContainer = document.getElementById("displayNewsContainer");
  newsContainer.textContent = "";
  data.forEach((news) => {
    const newsDiv = document.createElement("div");

    newsDiv.classList.add("card", "mb-3"), (newsDiv.style.maxWidth = "1000px");
    newsDiv.innerHTML = `
        <div class="row g-0">
        <div class="col-md-4 p-2 mx-auto">
          <img   src="${news.image_url}" class="img-fluid rounded" alt="...">
        </div>
        <div class="col-md-8">
          <div onClick="details('${news._id}')" class="card-body">
            <h5 class="card-title">${news.title}</h5>
            
            <p class="card-text"><small class="text-body-secondary">${news.details.slice(
              0,
              200
            )}</small></p>
            
            <button style = "text-decoration: underline;" onClick="details('${news._id}')" type="button" class="rounded mb-2 btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >click here ...</button>
            
            <div class="container text-center">
  <div class="row">
    <div class="col d-flex">
    
    <img src="${news.author.img}" alt="Bootstrap" width="30" height="24">
      

      <p class="fs-6 ps-3">${news.author.name ? news.author.name : "Irfan"} </p>
      
    </div>

    <div class="col d-flex">
     <i class="fa-sharp fa-regular fa-eye mt-2"></i> 
     <p class = "ps-2 pt-1">${news.total_view ? news.total_view : 100} M</p>
    
    <div>
    
    </div>
    
    <div class="col">
    <i class="fa-sharp fa-regular fa-star"></i>
              <i class="fa-sharp fa-regular fa-star"></i>
              <i class="fa-sharp fa-regular fa-star"></i>
              <i class="fa-sharp fa-regular fa-star"></i>
              <i class="fa-sharp fa-regular fa-star"></i>
    <div>
    
  </div>

</div>
          </div>
        </div>
      </div>
        `;
  
    newsContainer.appendChild(newsDiv);
    // console.log(news);
  });


};

// Details show  

const  details = (_id) =>{
  fetch(`https://openapi.programming-hero.com/api/news/${_id}`)
  .then(res => res.json())
  .then(data => displayDetails(data.data[0]))
}

const displayDetails = (details) => {
 
  const modalTitle =  document.getElementById('modalTitle')
  modalTitle.innerText=details.title
  const divDetail = document.getElementById('details')
  divDetail.innerHTML=`
  <img class="w-50" src="${details.image_url}" alt="">
  <p>${details.details}</p>
  `
}
loadCategories();

