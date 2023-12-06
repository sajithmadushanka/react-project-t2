import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

import './Profile.scss'
import { useEffect, useState } from 'react'
function Profile() {

    const [checkState, setCheckState] = useState(false);
    function check(){
       let checkState =  document.getElementById('isComplete').checked
       setCheckState(checkState)
    }
    const addTodo = ()=>{
        console.log('toda added')
    }
    useEffect(()=>{
        check()
         
    const checkbox = document.getElementById('isComplete');
    checkbox.addEventListener('change', check);

    })
    return ( 
        <>
            <div className="profile-outer">
                <div className="profile-inner">
                    <div className="top-row">
                        <div className="user">
                            <div className="img-circle">

                            </div>
                            <p>Mash</p>
                        </div>
                        <div className="add-todo-btn">
                            <button onClick={addTodo}>
                                +
                            </button>
                        </div>
                    </div>
                    {/* todo list */}
                    <div className="todo-list">
                        <div className="todo-card">
                                <div className="right-side">
                                        <input type="checkbox" id='isComplete'/>
                                </div>
                                <div className={`middle-text ${checkState ? 'CheckBox' : ''} `}>
                                    <h2 >I have to go to school</h2>
                                    <p>becourse today I have an class</p>
                                </div>
                                <div className="left-side">
                                        <input type="date" />

                                        <div className="update-icon">
                                        <FontAwesomeIcon icon={faPenToSquare}  size="lg" onClick={()=>console.log('clicked')}/>             
                                        </div>
                                        <div className="delete-icon">
                                        <FontAwesomeIcon icon={faTrash} size="lg" onClick={()=>console.log('clicked')} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Profile;