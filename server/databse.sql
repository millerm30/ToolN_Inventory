--Create Databse--
CREATE DATABASE pernstack;

--Create Tables--
CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT 
    uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

CREATE TABLE tools (
    tool_id uuid PRIMARY KEY DEFAULT 
    uuid_generate_v4(),
    tool_type VARCHAR(255) NOT NULL,
    tool_brand VARCHAR(255) NOT NULL,
    tool_model VARCHAR(255) NOT NULL,
    tool_serial VARCHAR(255) NOT NULL,
    user_id uuid REFERENCES users(user_id) ON DELETE CASCADE
);