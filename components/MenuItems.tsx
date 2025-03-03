// React ve React Native bileşenlerini içe aktarıyoruz
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Menüdeki her öğenin tipini belirtiyoruz (TypeScript için)
type MenuItem = {
    name: string; // Yemek adı
    price: string; // Yemek fiyatı
    id: string;   // Her öğeye özel benzersiz kimlik
};

// Menü öğelerini içeren bir dizi tanımlıyoruz
const menuItemsToDisplay = [
    { name: 'Hummus', price: '$5.00', id: '1A' },
    { name: 'Moutabal', price: '$5.00', id: '2B' },
    { name: 'Falafel', price: '$7.50', id: '3C' },
    { name: 'Marinated Olives', price: '$5.00', id: '4D' },
    { name: 'Kofta', price: '$5.00', id: '5E' },
    { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
    { name: 'Lentil Burger', price: '$10.00', id: '7G' },
    { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
    { name: 'Kofta Burger', price: '$11.00', id: '9I' },
    { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
    { name: 'Fries', price: '$3.00', id: '11K' },
    { name: 'Buttered Rice', price: '$3.00', id: '12L' },
    { name: 'Bread Sticks', price: '$3.00', id: '13M' },
    { name: 'Pita Pocket', price: '$3.00', id: '14N' },
    { name: 'Lentil Soup', price: '$3.75', id: '15O' },
    { name: 'Greek Salad', price: '$6.00', id: '16Q' },
    { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
    { name: 'Baklava', price: '$3.00', id: '18S' },
    { name: 'Tartufo', price: '$3.00', id: '19T' },
    { name: 'Tiramisu', price: '$5.00', id: '20U' },
    { name: 'Panna Cotta', price: '$5.00', id: '21V' },
  ];

// Tek bir menü öğesini gösterecek bileşeni oluşturuyoruz
type ItemProps = {
    name: string; // Yemek adını alacak prop
    price: string; // Yemek fiyatını alacak prop
};

const Item: React.FC<ItemProps> = ({ name, price }) => {
    return (
        <View style={menuStyles.itemContainer}>
            <Text style={menuStyles.itemText}>{name}</Text> 
            <Text style={menuStyles.itemText}>{price}</Text>
        </View>
    );
};

// Menü bileşeni, yemek listesini göstermek için FlatList kullanıyor
const MenuItems: React.FC = () => {
    // Her öğeyi render eden fonksiyon
    const renderItem = ({ item }: { item: MenuItem }) => <Item name={item.name} price={item.price} />;

    return (
        <View style={menuStyles.container}>
            {/* FlatList bileşeni ile menü öğelerini gösteriyoruz */}
            <FlatList 
                data={menuItemsToDisplay} // Liste verisini veriyoruz
                renderItem={renderItem} // Her öğeyi render edecek fonksiyonu belirtiyoruz
                keyExtractor={(item) => item.id} // Her öğeye benzersiz bir anahtar atıyoruz
            />
        </View>
    );
};

// Stil tanımlamaları
const menuStyles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    headerText: {
        color: 'white', // Başlık rengi
        fontSize: 40,   // Yazı büyüklüğü
        flexWrap: 'wrap', // Uzun başlıkları sarmalasın
    },
    itemContainer: {
        paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    },
    itemText: {
        color: '#F4CE14', // Menü öğelerinin rengi
        fontSize: 20,     // Menü öğelerinin yazı boyutu
    },
    positionLeft: {
        textAlign: 'left', // Metni sola hizalar
    },
    positionRight: {
        textAlign: 'right', // Metni sağa hizalar
    },
});

// Menü bileşenini dışa aktarıyoruz
export default MenuItems;
