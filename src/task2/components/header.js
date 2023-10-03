import react from 'react';

function Header(props){
    return (
        <div class='w-1/3 m-auto items-center text-center mt-8'>
    <h1 class='text-4xl font-semibold text-sky-950'>{props.heading}</h1> 
    <p class='mt-3 font-medium text-sm'>{props.para}</p>    
        </div>
    )
}

export default Header;