import React from 'react';
import './UserLists.css';
import {Avatar} from 'antd';
import 'antd/dist/antd.css';

const UsersList = ({users}) => {
    console.log(users)
    return(
        <div className='usersOuter'>
            <h3 className='headers'>Online users</h3>
            <div className='usersInner'>
                {
                    users.map((user) => {
                        let substring = user.name.substr(0,2)
                        return(
                            <div className='users'>
                                <Avatar>{substring}</Avatar>
                                <div className='user-name'>
                                    {user.name}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UsersList;