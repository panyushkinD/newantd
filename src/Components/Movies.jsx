import React from 'react';
import { Table } from 'antd';

const columns = [
    {
        title: 'Название фильма',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'EngName',
        dataIndex: 'EngName',
        key: 'EngName',
    },
    {
        title: 'Продолжительность',
        dataIndex: 'duration',
        key: 'duration',
    },
    {
        title: 'Год выпуска',
        dataIndex: 'year',
        key: 'year',
    },
    {
        title: 'Жанр',
        dataIndex: 'genre',
        key: 'genre',
    },
    {
        title: 'Режиссер',
        dataIndex: 'director',
        key: 'director',
    },
    {
        title: 'В главных ролях',
        dataIndex: 'stars',
        key: 'stars',
    },
    {
        title: 'Страна производства',
        dataIndex: 'country',
        key: 'country',
    },
    {
        title: 'Язык оригинала',
        dataIndex: 'originalLanguage',
        key: 'originalLanguage',
    },
    {
        title: 'Рейтинг',
        dataIndex: 'rating',
        key: 'rating',
    },
    {
        title: 'Описание сюжета',
        dataIndex: 'description',
        key: 'description',
    },
];


function Movies() {
    return (
        <Table columns={columns}  />
    );
}

export default Movies;