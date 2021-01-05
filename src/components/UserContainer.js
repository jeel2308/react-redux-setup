import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchUsers} from "../redux/users/userActions";

function UserContainer({userData, fetchUsers}) {

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);

    return (
        <div>
            {
                userData.loading ? (<h2>Loading ...</h2>) :
                    userData.error ? (<h2>{userData.error}</h2>) :

                            userData
                        && userData.users
                        && userData.users.map(user => <p>{user.name}</p>)


            }
        </div>
    );
}

function mapStateToProps(state) {
    return {
        userData: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);