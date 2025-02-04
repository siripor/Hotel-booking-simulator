function showForm(formId){
    document.querySelectorAll(".form").forEach(form => {
        form.classList.add("hidden");
    })


    document.getElementById(formId).classList.remove("hidden");
}


