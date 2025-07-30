
import React, {  useEffect, useState} from 'react';
import { TextInput, View} from 'react-native';
import styles from './styles';
import Search from '../../../assests/svg/search';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { searchProducts } from '../../../redux/services/searchService';


interface ISearchBarProps {
    setIsSearching: (isSearching: boolean) => void;
    setSearchResults: (results: any[]) => void;
}

const SearchBar = ({ setIsSearching, setSearchResults}: ISearchBarProps) => {
    const [inputText, setInputText] = useState('');
    const [flag, setFlag] = useState(true);

    const {data} = useSelector((state:RootState)=>state.products)
    console.log(data);
    useEffect(() => {
        const handleSearch = async () => {
            if (inputText.trim().length === 0) {
                setIsSearching(false);
                setSearchResults([]);
                return;
            }

                setIsSearching(true);
                try {
                    const results = await searchProducts(inputText);
                    setSearchResults(results);
                } catch (error) {
                    setSearchResults([]);
                    console.error('Error fetching search results', error);
                }
        };

        handleSearch();
    }, [inputText,setIsSearching, setSearchResults]);

    return (
        <View style={styles.searchContainer}>
            {flag ? <Search /> : ''}
            <TextInput
                placeholder="Search Products"
                style={styles.textInput}
                placeholderTextColor="#888"
                onChangeText={setInputText}
                value={inputText}
                onFocus={() => {
                    setFlag(false);
                }}
                onBlur={() => {
                    setFlag(true);
                    if (inputText.length === 0) {
                        setIsSearching(false);
                    }
                }}
            />
        </View>
    );
};

export default SearchBar;



