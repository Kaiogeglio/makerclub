import React, { useState, useEffect } from 'react';
import { StatusBar} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

//icon
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';

//styles
import { KeyboardView, Loading, MakerLine, Title, FooterBar } from './styles';

//components
import api from '../../services/api';
import PageHeader from '../../components/PageHeader';
import MakerItem from '../../components/MakerItem';
 
function MakerList(){

    const { navigate } = useNavigation();

    const [service, setService] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    async function loadPage(pageNumber = page, shouldRefresh = false){

        if(total && pageNumber > total) return;

        setLoading(true);


        await api.get(`/service?limit=4&page=${pageNumber}`)
        .then(response => {
            const data = response.data.services.docs;
            setService(shouldRefresh ? data : [...service, ...data])
            setPage(pageNumber + 1)
            setTotal(response.data.services.totalPages)
            setLoading(false)
        })
        .catch((error) => {
            alert('erro ao tentar buscar a lista');
            // navigate("SignIn");
        });         
    }

    async function refreshList() {
        setRefreshing(true);
        
        await loadPage(1, true);
    
        setRefreshing(false);
    }

    async function handleFavorite(favorite, service) {
        await api.post("/favorite", { service, favorite })
        .then((response) => {
            alert("sucesso")
            loadPage(1, true);
        })
        .catch((error) => {
            alert('erro')
        })
    }

    useEffect(() =>{
        loadPage(1, true);
    }, [])

    return(
        <KeyboardView>
            <StatusBar barStyle="light-content"/>
            <PageHeader />

            <MakerLine 
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 1
                }}
                data={service}
                keyExtractor={service => String(service._id)}
                onEndReached={() => loadPage()}
                onEndReachedThreshold={0.1}
                ListFooterComponent={loading && <Loading />}
                onRefresh={refreshList}
                refreshing={refreshing}
                renderItem={({ item }) => (
                    <MakerItem 
                        service={item}
                        hashtags={item.hashtags} 
                        user={item.user}
                        iconFavorite={heartOutlineIcon}
                        colorIcon={'#7853EA'}
                        onUnfavorite={handleFavorite}
                        changeFavoriteTo={true}
                    />
                )}

            />
        </KeyboardView>
        
    )
}

export default MakerList;
