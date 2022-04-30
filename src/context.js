import React from 'react'

const GlobalContext = React.createContext();

class ContextProvider extends React.Component {
    state = {
        customNews: [],
        user: ''
    }

    setUser = (newUser) => {
        this.setState({ user: newUser });
    }

    setCustomNews = (news) => {
        this.setState(prevState => {
            return { customNews: [...prevState.customNews, news] }
        })
    }

    render() {
        const { children } = this.props;
        const { customNews, user } = this.state;
        const { setCustomNews, setUser } = this;

        return (
            <GlobalContext.Provider value={{ customNews, user, setCustomNews, setUser }}>
                {children}
            </GlobalContext.Provider>
        )
    }
}

export default GlobalContext;
export { ContextProvider }