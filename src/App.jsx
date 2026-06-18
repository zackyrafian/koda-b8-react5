import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from "react-router-dom";
const shema = yup.object({
  name: yup.string().required('Nama lengkap wajib disii'), 
  age: yup.number().positive().typeError('Harus Berupa angka').required('Umur wajib diisi')
})

export default function App() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(shema)
  });

  function onSubmit(data) {
    // console.log(data);

    let iData = localStorage.getItem('dataSurvey');
    let arrData = iData ? JSON.parse(iData) : [];
    arrData.push(data);
    localStorage.setItem('dataSurvey', JSON.stringify(arrData));

    // console.log(arrData);

    alert('Data berhasil disimpan!');
    reset();
  }

  return (
  <div className="flex items-center m-auto gap-4 flex-col max-w-[867px] w-full px-4 pt-4">
        <div className="bg-white rounded-xl border border-black/30 border-t-[12px] border-t-purple-700 p-6 overflow-hidden shadow-sm">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-normal text-black">Survery Perokok</h1>
            <div className="text-gray-800">Jumlah perokok aktif di Indonesia mencapai 70 juta orang, dengan estimasi persentase perokok pria tertinggi di dunia mencapai 73,2%. Berdasarkan laporan resmi, prevalensi perokok anak usia muda meningkat dan penggunaan rokok elektrik naik hingga sepuluh kali lipat dalam satu dekade terakhir.</div>
            <Link className="mt-2 color-blue-500" to="/data">Data Suvery</Link>
          </div>
        </div>
  
      <form id="form-data" onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-5">
      <div className="bg-white rounded-xl border border-black/30 p-6 w-full flex flex-col gap-6 shadow-sm">
      <label className="font-medium text-lg" for="name">Siapa nama lengkap anda?</label>
      <div className="border-b p-2">
        <input className="w-full focus-visible:outline-none" id="name" type="text" {...register('name')} placeholder="Your answer"/>
          </div>
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>
  
        <div className="bg-white rounded-xl border border-black/30 p-6 w-full flex flex-col gap-6 shadow-sm">
          <label className="font-medium text-lg" for="age">Berapa umur anda?</label>
          <div className="border-b p-2">
            <input className="w-full focus-visible:outline-none" id="age" type="number" {...register('age')} placeholder="Your answer"/>
          </div>
          {errors.age && <span className="text-red-500 text-sm">{errors.age.message}</span>}
        </div>
  
        <div className="bg-white rounded-xl border border-black/30 p-6 w-full flex flex-col gap-6 shadow-sm">
          <label className="font-medium text-lg">Apa jenis kelamin anda?</label>
          <div className="checkbox-wrap">
          <div className="flex gap-2">
              <input value="Laki-Laki" id="male" type="radio" {...register('gender')}/>
              <label for="male">Laki Laki</label>
            </div>
            <div className="flex gap-2">
              <input value="Perempuan" id="female" type="radio" {...register('gender')}/>
              <label for="female">Perempuan</label>
            </div>
          </div>
        </div>
  
        <div className="bg-white rounded-xl border border-black/30 p-6 w-full flex flex-col gap-6 shadow-sm">
          <label className="font-medium text-lg">Apakah anda perokok?</label>
          <div className="checkbox-wrap">
          <div className="flex gap-2">
              <input value="Ya" id="yes" type="radio" {...register('perokok')}/>
              <label for="yes">Ya</label>
            </div>
            <div className="flex gap-2">
              <input value="Tidak" id="no" type="radio" {...register('perokok')}/>
              <label for="no">Tidak</label>
            </div>
          </div>
        </div>
  
        <div className="bg-white rounded-xl border border-black/30 p-6 w-full flex flex-col gap-6 shadow-sm">
          <label className="font-medium text-lg">Jika anda perokok, rokok apa yang adan pernah coba?</label>
          <div className="flex flex-col gap-2">
          <div className="checkbox-input-wrap flex gap-2">
              <input value="Gudang Garam Filter" id="filter" type="checkbox" {...register('cig')}/>
              <label for="filter">Gudang Garam Filter</label>
            </div>
            <div className="flex gap-2">
              <input value="Lucky Strike" id="lucky-strike" type="checkbox" {...register('cig')}/>
              <label for="lucky-strike">Lucky Strike</label>
            </div>
            <div className="flex gap-2">
              <input value="Malboro" id="marlboro" type="checkbox" {...register('cig')}/>
              <label for="marlboro">Marlboro</label>
            </div>
            <div className="flex gap-2">
              <input value="LA Ice" id="la-ice" type="checkbox" {...register('cig')}/>
              <label for="la-ice">LA Ice</label>
            </div>
          </div>
        </div>
  
        <div className="flex justify-between w-full pl-2 pr-2">
          <button className="bg-purple-800 text-white flex justify-center items-center font-medium shadow-sm px-6 py-2 rounded-xl" type="submit">Submit</button>
          <button type="button" onClick={() => reset()}>Reset</button>
        </div>
      </form>
  
      <div className="never">
        <span>Never submit passwords throught Google Chrome</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span>This content is neither created nor endorsed by Google, Report Abuse - Terms of Service - Privacy Policy</span>
        <p className="text-1xl font-semibold">Google <span className="font-normal">Forms</span></p>
      </div>
    </div>
  )
}