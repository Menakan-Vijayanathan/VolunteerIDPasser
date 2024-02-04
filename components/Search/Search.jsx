'use client'
import React from 'react';
import { useState, useEffect } from 'react'
import styles from './Search.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get the value of the input with the name attribute 'nic'
        const formData = new FormData(e.target);
        const nic = formData.get('nic');
        setSearchTerm(nic);

        try {
            // Send a GET request to the "/api" route with the search term as a query parameter
            const response = await fetch(`/api/search?nic=${nic}`, {
                method: 'GET',
                headers: {
                    // You can add headers if needed
                    'Content-Type': 'application/json',
                    // Additional headers as needed
                },
                // You can add other options like credentials, mode, etc.
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            // Assuming the API returns JSON data, parse the response
            setData(await response.json());
        } catch (error) {
            setData(null)
            console.error('Error:', error.message);
            // Handle errors as needed
        }
    };

    return (
        <div className={styles.searchArea}>
            <div className={styles.searchBar}>
                <form className={styles.searchBar} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter NIC number"
                        className={styles.input}
                        name='nic'
                    />
                    <button className={styles.searchButton} type={"submit"}>
                        <FontAwesomeIcon icon={faSearch} width={20} className={styles.searchIcon} />
                    </button>
                </form>
            </div>

            <div>
                <h2>Search Results</h2>
                <p>{searchTerm != '' ? `Showing results for: ${searchTerm}` : 'No search term entered'}</p>
                {data && Object.keys(data).length > 0 && (
                    // Render data if it exists
                    <div>
                        {/* Display your data here */}
                        <p>Data:</p>
                        <ul>
                            {/* Assuming _id, name, and nic are properties of data */}
                            <li>ID: {data.result[0]._id}</li>
                            <li>Name: {data.result[0].name}</li>
                            <li>NIC: {data.result[0].nic}</li>
                        </ul>
                    </div>
                )}
                {data == null && (
                    // Render data if it exists
                    <div>
                        <p>Nothing to show!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;