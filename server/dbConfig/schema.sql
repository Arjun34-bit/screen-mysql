-- Create master table
CREATE TABLE master (
    id INT AUTO_INCREMENT PRIMARY KEY,
    certificate_type VARCHAR(255) NOT NULL
);

-- Create details table
CREATE TABLE details (
    id INT AUTO_INCREMENT PRIMARY KEY,
    master_id INT NOT NULL,
    question VARCHAR(255) NOT NULL,
    FOREIGN KEY (master_id) REFERENCES master(id)
);
