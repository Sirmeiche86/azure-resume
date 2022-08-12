window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
        let count = 30;
        fetch(functionApi).then(response => {
            return response.json
        }).then(response =>{
            console.log("website called funtion API.");
            count = response.count;
            document.getElementById("counter").innerText = count;
        }).catch(function(error){
            console.log(errror);   
        });
        return count;
}