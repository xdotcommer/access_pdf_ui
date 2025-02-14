import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["summaryView", "metadataView", "historyView", "summaryButton", "metadataButton", "historyButton"]

  connect() {
    // Initialize with Summary view
    this.showSummaryView()
  }

  submitAndClose(event) {
    // Let the form submit normally
    // The modal will close automatically when redirected after successful submission
    const modal = document.getElementById('add_site_modal')
    if (modal) {
      modal.addEventListener('turbo:submit-end', () => {
        modal.close()
      }, { once: true })
    }
  }

  showSummaryView() {
    this.hideAllViews()
    this.summaryViewTarget.classList.remove("hidden")
    this.updateButtonStyles(this.summaryButtonTarget)
  }

  showMetadataView() {
    this.hideAllViews()
    this.metadataViewTarget.classList.remove("hidden")
    this.updateButtonStyles(this.metadataButtonTarget)
  }

  showHistoryView() {
    this.hideAllViews()
    this.historyViewTarget.classList.remove("hidden")
    this.updateButtonStyles(this.historyButtonTarget)
  }

  hideAllViews() {
    this.summaryViewTarget.classList.add("hidden")
    this.metadataViewTarget.classList.add("hidden")
    this.historyViewTarget.classList.add("hidden")
  }

  updateButtonStyles(activeButton) {
    [this.summaryButtonTarget, this.metadataButtonTarget, this.historyButtonTarget].forEach(button => {
      button.classList.remove("tab-active")
    })
    activeButton.classList.add("tab-active")
  }
}
