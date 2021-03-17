import React from 'react';

import GlobalLoader from "../components/GlobalLoader/GlobalLoader";
import ServerResponse from '../components/ServerResponse';

export default function withLoader(Component, method) {

    return class ComponentWithLoader extends React.PureComponent{
        constructor(props) {
            super(props);

            this.state = {
                data: null,
            }
        }

        componentDidMount() {
            const client = new ServerResponse();

            client[method]().then(data => this.setState({
                data: data,
            }));
        }

        render() {
            const {data} = this.state;
            return data ? <Component data={data} {...this.props} /> : <GlobalLoader />
        }
    }
}

