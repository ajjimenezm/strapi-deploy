resource "google_service_account" "github_actions" {
  account_id   = "github-actions-sa"
  display_name = "GitHub Actions Service Account"
}

resource "google_project_iam_binding" "gke_roles" {
  project = var.project_id
  role    = "roles/container.developer"
  members = [
    "serviceAccount:${google_service_account.github_actions.email}"
  ]
}

resource "google_project_iam_binding" "artifact_registry_roles" {
  project = var.project_id
  role    = "roles/storage.admin"
  members = [
    "serviceAccount:${google_service_account.github_actions.email}"
  ]
}

resource "google_project_iam_binding" "sa_user_role" {
  project = var.project_id
  role    = "roles/iam.serviceAccountUser"
  members = [
    "serviceAccount:${google_service_account.github_actions.email}"
  ]
}

resource "google_service_account_key" "github_actions_key" {
  service_account_id = google_service_account.github_actions.name
  private_key_type   = "TYPE_GOOGLE_CREDENTIALS_FILE"
}

output "github_actions_key" {
  value     = google_service_account_key.github_actions_key.private_key
  sensitive = true
}