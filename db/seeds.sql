USE employee_tracker;
INSERT INTO department (name)
VALUES
  ("HR"),
  ("Marketing");

  INSERT INTO role ( title,salary,department_id)
VALUES
  ("HR Representative", 20000,1),
  ('Marketing Representative', 15000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Ronald', 'Firbank', 1, NULL),
  ('Virginia', 'Woolf', 2, NULL);