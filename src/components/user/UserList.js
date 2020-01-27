import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, CardBody } from 'reactstrap'

import { getUsers } from '../../store/actions'

const UserList = props => {
    useEffect(() => {
        !props.users && props.getUsers()
    }, [props])

    return (
        <div>
            <h2>User List</h2>
            <Row>
                {props.users && props.users.map(user => (
                    <Col xs='3' key={user.id}>
                        <Card>
                            <CardBody>
                                <p>ID: {user.id}</p>
                                <p>Username: {user.username}</p>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getUsers })(UserList)