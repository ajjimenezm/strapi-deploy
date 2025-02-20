variable "project_id" {
  description = "GCP Project ID"
  type        = string
}

variable "region" {
  description = "GCP region"
  type        = string
  default     = "us-central1"
}

variable "service_account_name" {
  description = "Service Account Name"
  type        = string
  default     = "github-actions-sa"
}
