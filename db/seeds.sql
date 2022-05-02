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
  ('CSR', 30000, 1);  
  
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
  ('Maddy', 'Dawson', 1, 1),
  ('Virginia', 'Santiago', 1, NULL),
  ('Jaycee', 'Flores', 1, NULL),
  ('Jeremy,', 'Vega', 1, NULL),

  ('Jamie','Bourne', 2, 5),
  ('Daisy', 'Martinez', 2, NULL),
  ('Sandra', 'Davis', 2, NULL),
  ('Jack', 'Gonzalez', 2, NULL),

  ('Jason', 'Sanchez', 3, 9),
  ('Ezra', 'Davidson', 3, NULL),
  ('Bridget', 'Franklin', 3, NULL),

  ('Oscar', 'Wilde', 4, 12),  
  ('Jack', 'King', 4, NULL),
  ('Mary', 'Tomlinson', 4, NULL);