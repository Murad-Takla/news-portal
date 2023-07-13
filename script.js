const loadCategories = () => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res => res.json())
    .then(data => displayCategories(data.data.news_category))
} 
const displayCategories = (categories) =>{
    // console.log(categories)

    //create div for all categories
    
    const categoriesContainer = document.getElementById('categories-container')


    categories.forEach(category => {
        const categoriesDiv = document.createElement('div')
        categoriesDiv.classList.add('m-auto')
        categoriesDiv.innerHTML = `
        <a  href="" class="text-danger" ><h6>${category.category_name}</h6></a>
            
         
        `
        categoriesContainer.appendChild(categoriesDiv)
        console.log(category.category_name)
    });
}
loadCategories()