import { ref } from "vue";
 const openWindow= ref(false);

    function closePopUp(){
        openWindow.value=false;
    }
    function openPopUp(){
        openWindow.value=true;
    }
export function usePopUp(){
   
    return{
        openWindow,
        closePopUp,
        openPopUp,
    }
}