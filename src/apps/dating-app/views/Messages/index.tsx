import React from "react";
import {Container} from "./styles";
import {FlatList} from "react-native";
import {Message} from "./components/Message";
import {Header} from "./components/Header";
import Divider from "../../components/Divider";
import {PICTURE_SIZE} from "./components/Message/styles";
import {mockRequest} from "./__mocks__";
import {SafeComponent} from "../../components";

function Component() {
    return (
        <Container>
            <SafeComponent request={mockRequest}>
                <FlatList
                    ListHeaderComponent={Header}
                    data={mockRequest.data}
                    keyExtractor={(message) => String(message.id)}
                    ItemSeparatorComponent={() => (
                        <Divider
                            style={{marginHorizontal: 15, marginLeft: 30 + PICTURE_SIZE}}
                        />
                    )}
                    renderItem={({item}) => <Message item={item}/>}
                />
            </SafeComponent>
        </Container>
    );
}

export default Component;
