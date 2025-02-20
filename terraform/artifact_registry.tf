resource "google_artifact_registry_repository" "strapi_repo" {
  provider      = google
  project       = var.project_id
  location      = var.region
  repository_id = "strapi"
  format        = "DOCKER"
}

output "artifact_registry_repo" {
  value = google_artifact_registry_repository.strapi_repo.repository_id
}