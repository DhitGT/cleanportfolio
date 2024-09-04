<template>
  <div class="container my-20">
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
          @click="openModal(certificate.preview)"
        >
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

      <!-- Modal -->
      <div v-if="showModal" class="modal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <v-btn icon class="close-button" @click="closeModal">
            <v-icon color="#000">mdi-close</v-icon></v-btn
          >
          <img :src="modalImage" class="modal-image" alt="Full Certificate" />
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
          name: 'Certificate One',
          description: 'Description for Certificate One.',
          link: 'https://example.com/certificate-one',
          preview: 'https://via.placeholder.com/300x200?text=Certificate+One',
        },
        {
          name: 'Certificate Two',
          description: 'Description for Certificate Two.',
          link: 'https://example.com/certificate-two',
          preview: 'https://via.placeholder.com/700x400?text=Certificate+Two',
        },
        // Add more certificates as needed
      ],
      showModal: false,
      modalImage: '',
    }
  },
  methods: {
    openModal(imageSrc) {
      this.modalImage = imageSrc
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
      this.modalImage = ''
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
  overflow: hidden; /* Ensure content doesn't overflow */
}

.card-preview {
  width: 100%;
  height: 200px; /* Adjust based on your image size */
  overflow: hidden;
}

.card-preview img {
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
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.modal-image {
  width: 100%;
  height: auto;
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
