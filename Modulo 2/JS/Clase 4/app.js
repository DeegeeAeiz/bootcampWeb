const imageInput = document.getElementById("imageInput")

const gallery = document.getElementById("gallery")

imageInput.addEventListener("change", function(){
    const files = Array.from(this.files)
    gallery.innerHTML = ""

    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(e){
            const img = document.createElement("img")
            img.src = e.target.result

            img.addEventListener("click", function(){
                img.classList.toggle("zoomed")
            })

            gallery.append(img)
        }

        reader.readAsDataURL(file)
    });
})