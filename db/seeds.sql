INSERT INTO department (name)
VALUES
  ("Family"),  
  ("Pediatrics"),
  ("OBGYN"),
  ("Counseling");

INSERT INTO role (title, salary, department_id)
VALUES
  ('LVN Floor Supervisor', 65000, 1),
  ('MA Team Lead', 55000, 1),
  ('MA', 40000, 1),
  ('CSR', 30000, 1),    
  ('LVN Floor Supervisor', 65000, 2),
  ('MA Team Lead', 55000, 2),
  ('MA', 40000, 2),
  ('CSR', 30000, 2),
  ('Supervising RN', 70000,3),
  ('MA', 40000, 3),
  ('CSR', 30000, 3),  
  ('Supervising RN', 70000, 4),
  ('MA', 40000, 4),
  ('CSR', 30000, 4);

INSERT INTO employee
 (first_name, last_name, role_id, manager_id)
VALUES
  ('Maddy', 'Dawson', 1, NULL),
  ('Virginia', 'Santiago', 1, 1),
  ('Jaycee', 'Flores', 1, 1),
  ('Jeremy,', 'Vega', 1, 1),

  ('Jamie','Bourne', 2, NULL),
  ('Daisy', 'Martinez', 2, 2),
  ('Sandra', 'Davis', 2, 2),
  ('Jack', 'Gonzalez', 2, 2),

  ('Jason', 'Sanchez', 3, NULL),
  ('Ezra', 'Davidson', 3, 3),
  ('Bridget', 'Franklin', 3, 3),

  ('Oscar', 'Wilde', 4, NULL),  
  ('Jack', 'King', 4, 4),
  ('Mary', 'Tomlinson', 4, 4);