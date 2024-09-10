<template>
  <div class="container my-20" id="Cert">
    <div class="md:pl-28">
      <div class="flex items-center gap-4">
        <p class="text-[#e9FF93] text-5xl font-bold whitespace-nowrap">
          Certificates
        </p>
        <div
          class="flex-grow border-b-2 mt-5 border-dotted border-[#e9FF93]"
          style="border-color: #e9ff93"
        ></div>
      </div>

      <!-- Certificates Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div
          v-for="(certificate, index) in certificates"
          :key="index"
          class="certificate-card"
          @click="openModal(certificate.pdf)"
        >
          <!-- Image Preview as PDF Cover -->
          <div class="card-preview">
            <img :src="certificate.preview" alt="Certificate Preview" />
          </div>
          <div class="card-content">
            <p class="text-white text-2xl font-bold mb-2">
              {{ certificate.name }}
            </p>
            <p class="text-gray-300 mb-4">{{ certificate.description }}</p>
            <div class="flex items-center justify-between">
              <a
                :href="certificate.link"
                target="_blank"
                class="text-[#e9FF93] text-2xl"
              >
                <v-icon>mdi-certificate</v-icon>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal for Full PDF View -->
      <div v-if="showModal" class="modal bg-red-300 pa-3" @click="closeModal">
        <div class="modal-content" @click.stop>
          <iframe
            :src="modalPdf"
            class="modal-pdf"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      certificates: [
        {
          name: 'Traspac Intern',
          description:
            'Internship certificate from PT Traspac Makmur Sejahtera as a developer for 6 months.',
          link: 'sert-traspac.pdf',
          preview: 'sert-traspac-prev.PNG', // Image preview of PDF
          pdf: 'sert-traspac.pdf', // Full PDF file
        },
        {
          name: 'SMK Coding Liga SMK',
          description:
            'Certificate of participation in the SMK Coding League competition organized by SMK Coding.',
          link: 'sert-smkcoding.pdf',
          preview: 'sert-smkcoding-prev.PNG', // Image preview of PDF
          pdf: 'sert-smkcoding.pdf', // Full PDF file
        },
        {
          name: 'SMK Coding Fullstack .NET Dev',
          description:
            'Certificate of participation in the .NET Fullstack training for high school level organized by SMK Coding.',
          link: 'sert-smkcoding2.pdf',
          preview: 'sert-smkcoding2-prev.PNG', // Image preview of PDF
          pdf: 'sert-smkcoding2.pdf', // Full PDF file
        },
        // Add more certificates as needed
      ],
      showModal: false,
      modalPdf: '',
    }
  },
  methods: {
    openModal(pdfSrc) {
      this.modalPdf = pdfSrc
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
      this.modalPdf = ''
    },
  },
}
</script>

<style scoped>
.certificate-card {
  background-color: #1e1e1e;
  border-radius: 8px;
  border: 2px solid transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  perspective: 1000px;
  margin: 10px;
  overflow: hidden;
}

.card-preview {
  position: relative;
  width: 100%;
  padding-top: 75%; /* 4:3 Aspect Ratio (3 / 4 = 0.75 or 75%) */
  overflow: hidden;
}

.card-preview img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.card-content {
  padding: 20px;
  border-radius: 8px;
  border: 2px solid transparent;
}

.certificate-card:hover {
  border-color: #e9ff93;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
}

.certificate-card:hover .card-preview img {
  transform: scale(1.05); /* Slightly zoom the image on hover */
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  padding: 5rem;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.modal-pdf {
  width: 90vw;
  height: 90vh;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #333;
  cursor: pointer;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  padding: 5px;
  height: 2em;
  width: 2em;
}

.close-button:hover {
  background-color: #f5f5f5;
}
</style>
