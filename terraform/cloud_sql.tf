resource "google_sql_database_instance" "strapi_db_instance" {
  name             = "strapi-db-instance"
  database_version = "POSTGRES_14"
  region           = var.region

  settings {
    tier = "db-f1-micro"
    disk_size = 10
    availability_type = "REGIONAL"
  }
}

resource "google_sql_database" "strapi_db" {
  name     = "strapi"
  instance = google_sql_database_instance.strapi_db_instance.name
}

resource "google_sql_user" "strapi_user" {
  name     = "strapi_user"
  instance = google_sql_database_instance.strapi_db_instance.name
  password = random_password.db_password.result
}

resource "random_password" "db_password" {
  length  = 16
  special = false
}

output "db_host" {
  value = google_sql_database_instance.strapi_db_instance.public_ip_address
}

output "db_user" {
  value = google_sql_user.strapi_user.name
}

output "db_password" {
  value     = random_password.db_password.result
  sensitive = true
}
