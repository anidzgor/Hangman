import React, {useState, useEffect} from 'react';
import Api from '../Sources/Api';
import { useNavigation } from 'react-navi';
import { Button, Title, ButtonWrapper } from '../common/Layout';
import { CategoryItem } from '../common/types';

const Categories: React.FC = () => {

    const [categories, setCategories] = useState<CategoryItem[]>([]);
    const uniqueCategories = [...new Set(categories.map((item: CategoryItem) => item.category))];
    const navigation = useNavigation();

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async() => {
        const {data} = await Api.get("/");
        setCategories(data.words);
    }

    return (
        <ButtonWrapper>
            <Title>Choose category</Title>
            {uniqueCategories.map((item: string) => 
                <Button key={item} fontSize="5rem">{item}</Button>
            )}
        <Button fontSize="1.5rem" onClick={() => navigation.navigate('/')}>Back to Start Page</Button>
        </ButtonWrapper>
    )
}

export default Categories;