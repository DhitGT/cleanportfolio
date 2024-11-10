<template>
  <v-container class="container">
    <hr />
    <h2 class="font-bold text-3xl pt-3">LINK BAHAN BAHAN</h2>
    <div class="card pb-2">
      <a
        href="https://drive.google.com/drive/folders/12MXl9DgBeDF9YIrHqrWpJ4wsh6D0GSCL"
        >LINK BAHAN BAHAN</a
      >
    </div>
    <hr />
    <h2 class="font-bold text-3xl py-3">KONEKSI</h2>
    <div class="card">
      <p>Skrip Koneksi</p>
      <code-block :code="koneksi" />
    </div>
    <hr />
    <h2 class="font-bold text-3xl py-3">LOGIN</h2>
    <div class="card">
      <p>Code Login</p>
      <code-block :code="logininit" />
    </div>
    <div class="card">
      <p>Didalam Fungsi Login</p>
      <code-block :code="flogin" />
    </div>
    <hr />
    <h2 class="font-bold text-3xl py-3">REGISTER</h2>
    <div class="card">
      <p>Didalam Fungsi Register</p>
      <code-block :code="fregister" />
    </div>
    <hr />
    <h2 class="font-bold text-3xl py-3">FORM BARANG</h2>
    <div class="card">
      <p>Inisialisasi form barang code</p>
      <code-block :code="initbarang" />
    </div>
    <div class="card">
      <p>Database Connection</p>
      <code-block :code="koneksi_database" />
    </div>
    <div class="card">
      <p>Automatic Numbering</p>
      <code-block :code="autonumber" />
    </div>
    <div class="card">
      <p>Clear Input</p>
      <code-block :code="bersih" />
    </div>
    <div class="card">
      <p>Display Table</p>
      <code-block :code="tampil" />
    </div>
    <div class="card">
      <p>Save Data</p>
      <code-block :code="simpan" />
    </div>
    <div class="card">
      <p>Update Data</p>
      <code-block :code="update" />
    </div>
    <div class="card">
      <p>Delete Data</p>
      <code-block :code="hapus" />
    </div>
    <div class="card">
      <p>Handle Table Row Click</p>
      <code-block :code="table_barangMouseClicked" />
    </div>
    <hr />
    <h2 class="font-bold text-3xl py-3">REFERENSI IDE LAIN (BEDA PROJEK)</h2>
    <div class="card">
      <p>Search</p>
      <code-block :code="search" />
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: `public void SearchData(String keyword) {
        try {
            String cbvalue = cb_barang.getSelectedItem().toString();
            String searchColumn = "";


            if (cbvalue.equals("ID_Barang")) {
                searchColumn = "id";
            } else if (cbvalue.equals("Nama_Barang")) {
                searchColumn = "nama";
            }


            String sql = "SELECT * FROM tb_barang WHERE " + searchColumn + " LIKE ? ORDER BY " + searchColumn + " ASC";

            PreparedStatement ps = conn.prepareStatement(sql);


            ps.setString(1, "%" + keyword + "%");

            rs = ps.executeQuery();


            tbl_barang.setModel(new DefaultTableModel());


            DefaultTableModel tbl = new DefaultTableModel();
            tbl.addColumn("No");
            tbl.addColumn("Id Barang");
            tbl.addColumn("Nama Barang");
            tbl.addColumn("Merk");
            tbl.addColumn("Stok");
            tbl.addColumn("Harga");
            tbl.addColumn("Tanggal Masuk");
            tbl.addColumn("Expired");

            tbl_barang.setModel(tbl);
            int i = 0;


            while (rs.next()) {
                i++;
                tbl.addRow(new Object[]{
                    i,
                    rs.getString("id"),
                    rs.getString("nama"),
                    rs.getString("merk"),
                    rs.getString("stok"),
                    rs.getString("harga"),
                    rs.getString("tgl_masuk"),
                    rs.getString("exp"),});
            }
            tbl_barang.setModel(tbl);

        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, "Error: " + e.getMessage());
        }
    }`,
      koneksi: `public static Connection GetConnection() {
        Connection koneksi;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            koneksi = DriverManager.getConnection("jdbc:mysql://localhost/gladi_lsp", "root", "");
            return koneksi;
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null, e);
        }
        return null;
      }`,

      logininit: `Connection conn;
      /**
       * Creates new form LoginForm
       */
      public LoginForm() {
          initComponents();
          conn = gladilsp.ClassKoneksi.GetConnection();
      }`,

      flogin: `try {
          String sql = "select * from tb_user where username=? and password=?";
          PreparedStatement ps = conn.prepareStatement(sql);
          ps.setString(1, txt_username.getText());
          ps.setString(2, txt_pass.getText());
          ResultSet rs = ps.executeQuery();
          if (rs.next()) {
              new gladilsp.form.TableBarangForm().show();
              this.dispose();
          } else {
              JOptionPane.showMessageDialog(null, "PASSWORD ATAU USERNAME SALAH");
          }
      } catch (Exception e) {
          JOptionPane.showMessageDialog(null, e);
      }`,

      fregister: `private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {
          try {
              String sqlcheck = "select * from tb_user where username = ?";
              PreparedStatement pscheck = conn.prepareStatement(sqlcheck);
              pscheck.setString(1, txt_username.getText());
              ResultSet rs = pscheck.executeQuery();
              if(rs.next()){
                  return;
              }
              String sql = "insert into tb_user (nama,username,password) values (?,?,?)";
              PreparedStatement ps = conn.prepareStatement(sql);
              ps.setString(1, txt_nama.getText());
              ps.setString(2, txt_username.getText());
              ps.setString(3, txt_pass.getText());
              ps.executeUpdate();
              JOptionPane.showMessageDialog(null, "Berhasil membuat akun");
              new gladilsp.form.LoginForm().show();
              this.dispose();
          } catch (Exception e) {
              JOptionPane.showMessageDialog(null, e);
          }
      }`,

      initbarang: `import java.awt.Toolkit;
      import java.sql.*;
      import javax.swing.*;
      import javax.swing.table.DefaultTableModel;

      public class FormBarang extends javax.swing.JFrame {
          Connection conn;
          Statement stat;
          ResultSet rs;
          public Connection koneksi;
          String sql;

          public FormBarang() {
              initComponents();
              koneksi_database();
              this.setLocationRelativeTo(this);
              tampil();
              setTitle("Dheep Data Barang");
              setIconImage(Toolkit.getDefaultToolkit().getImage(getClass().getResource("dheeplogo64.jpg")));
          }
      }`,
      koneksi_database: `public void koneksi_database() {
    stat = latlsp.koneksi.GetConnectionStatement(); // Mengambil objek 'Statement' dari kelas koneksi
}`,
      autonumber: `public void autonumber() {
    try {
        String sql = "select max(id_barang) from tbl_barang";
        rs = stat.executeQuery(sql);
        if (rs.next()) {
            int a = rs.getInt(1);
            txt_id.setText("000" + (a + 1)); // Set the next id
        }
    } catch (Exception e) {
        JOptionPane.showMessageDialog(rootPane, "gagal : " + e);
    }
}`,
      bersih: `public void bersih() {
    txt_nama.setText("");
    cb_kategori.setSelectedIndex(1);
    txt_qty.setText("");
    txt_nama.requestFocus();
    txt_id.setText("");
}`,
      tampil: `public void tampil() {
    DefaultTableModel tbl = new DefaultTableModel();
    tbl.addColumn("Id Barang");
    tbl.addColumn("Nama Barang");
    tbl.addColumn("Kategori Barang");
    tbl.addColumn("Qty Barang");

    table_barang.setModel(tbl);
    try {
        rs = stat.executeQuery("select * from tbl_barang");
        while (rs.next()) {
            tbl.addRow(new Object[]{
                rs.getString(1),
                rs.getString(2),
                rs.getString(3),
                rs.getString(4),
            });
        }
    } catch (Exception e) {
        JOptionPane.showMessageDialog(rootPane, "gagal : " + e);
    }
}`,
      simpan: `public void simpan() {
    autonumber();
    if (txt_id.getText().isEmpty() || txt_nama.getText().isEmpty() || txt_qty.getText().isEmpty() || cb_kategori.getSelectedItem() == null) {
        JOptionPane.showMessageDialog(rootPane, "Pastikan semua data terisi dengan benar!");
        return;
    }
    try {
        stat.executeUpdate("insert into tbl_barang (id_barang, nama_barang, kategori, qty) values("
                + "'" + txt_id.getText() + "',"
                + "'" + txt_nama.getText() + "',"
                + "'" + cb_kategori.getSelectedItem() + "',"
                + "'" + txt_qty.getText() + "')");

        JOptionPane.showMessageDialog(rootPane, "Berhasil menambahkan data");
        tampil();
    } catch (Exception e) {
        JOptionPane.showMessageDialog(rootPane, "Error: " + e);
    }
}`,
      update: `public void update() {
    if (txt_id.getText().isEmpty() || txt_nama.getText().isEmpty() || txt_qty.getText().isEmpty() || cb_kategori.getSelectedItem() == null) {
        JOptionPane.showMessageDialog(rootPane, "Pastikan semua data terisi dengan benar!");
        return;
    }
    try {
        stat.executeUpdate("update tbl_barang set "
                + "nama_barang = '" + txt_nama.getText() + "',"
                + "kategori = '" + cb_kategori.getSelectedItem() + "',"
                + "qty = '" + txt_qty.getText() + "' "
                + "where id_barang = '" + txt_id.getText() + "'");

        JOptionPane.showMessageDialog(rootPane, "Berhasil update data");
        tampil();
        bersih();
    } catch (Exception e) {
        JOptionPane.showMessageDialog(rootPane, "Error: " + e);
    }
}`,
      hapus: `public void delete() {
    if (txt_id.getText().isEmpty()) {
        JOptionPane.showMessageDialog(rootPane, "ID Barang harus diisi untuk menghapus data!");
        return;
    }

    int confirm = JOptionPane.showConfirmDialog(rootPane, "Apakah Anda yakin ingin menghapus data ini?", "Konfirmasi", JOptionPane.YES_NO_OPTION);
    if (confirm == JOptionPane.YES_OPTION) {
        try {
            stat.executeUpdate("delete from tbl_barang where id_barang ='" + txt_id.getText() + "'");

            JOptionPane.showMessageDialog(rootPane, "Berhasil hapus data");
            tampil();
            bersih();
        } catch (Exception e) {
            JOptionPane.showMessageDialog(rootPane, "Error: " + e);
        }
    }
}`,
      table_barangMouseClicked: `private void table_barangMouseClicked(java.awt.event.MouseEvent evt) {
    try {
        // Mendapatkan indeks baris yang diklik berdasarkan koordinat mouse
        int row = table_barang.rowAtPoint(evt.getPoint());

        // Mengambil nilai 'id' dari kolom pertama pada baris yang dipilih
        String id = table_barang.getValueAt(row, 0).toString();

        // Mengambil nilai 'nama' (nama barang) dari kolom kedua pada baris yang dipilih
        String nama = table_barang.getValueAt(row, 1).toString();

        // Mengambil nilai 'kategori' dari kolom ketiga pada baris yang dipilih
        String kategori = table_barang.getValueAt(row, 2).toString();

        // Mengambil nilai 'qty' (jumlah) dari kolom keempat pada baris yang dipilih
        String qty = table_barang.getValueAt(row, 3).toString();

        // Mengatur nilai dari 'txt_id' sesuai dengan 'id' yang diambil dari tabel
        txt_id.setText(id);

        // Mengatur nilai dari 'txt_nama' sesuai dengan 'nama' yang diambil dari tabel
        txt_nama.setText(nama);

        // Mengatur nilai dari 'txt_qty' sesuai dengan 'qty' yang diambil dari tabel
        txt_qty.setText(qty);

        // Mengatur pilihan 'cb_kategori' sesuai dengan 'kategori' yang diambil dari tabel
        cb_kategori.setSelectedItem(kategori);

    } catch (Exception e) {
        // Menampilkan pesan kesalahan jika terjadi error saat menjalankan proses di atas
        JOptionPane.showMessageDialog(rootPane, "error : " + e);
    }
}`,
    }
  },
}
</script>
