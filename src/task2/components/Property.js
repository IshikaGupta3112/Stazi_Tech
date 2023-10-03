import react, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cards from './cards';
import Header from './header';

function Property(){
    const {id} = useParams();
    const [object, setObject] = useState();
    const hotels = useSelector((state) => state.hotelReducer.hotels);
    useEffect(()=>{
     setObject(hotels.find((obj)=>obj.id==id));
    },[])
   
    return (<>
    {object?<>
     <Header heading={object.name} para={object.loc}/>
     <div class="my-10 flex justify-center">
              <Cards
           id={object.id}
           loc={object.loc}
           roomNo={object.roomNo}
           bedNo={object.bedNo}
           bathNo={object.bathNo}
           size={object.size}
           price={object.price}
           name={object.name}
           For={object.For}
          />
          </div>
          </>
          :null}
    </>
    )
}

export default Property;