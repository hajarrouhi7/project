<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\InfoTerrain;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Carbon\Carbon;
use app\Providers\AppServiceProvider;


class InfoTerrainController extends Controller
{
    public function index()
    {   
        return InfoTerrain::select('id','img1','img2','img3','title','description','location','type','surface','ville','price')->get();  
    }
    public function store(Request $request)
    {
        // $request->validate([
        //     'img1' => 'required|image',
        //     'img2' => 'required|image',
        //     'img3' => 'required|image',
        //     'title' => 'required',
        //     'description' => 'required',
        //     'location' => 'required',
        //     'type' => 'required',
        //     'surface' => 'required',
        //     'ville' => 'required',
        //     'price' => 'required',
        // ]);
        $img1 = time().'.'.request()->img1->getClientOriginalExtension();
        request()->img1->move(public_path('img1'), $img1);
        $img2 = time().'.'.request()->img2->getClientOriginalExtension();
        request()->img2->move(public_path('img2'), $img2);
        $img3 = time().'.'.request()->img3->getClientOriginalExtension();
        request()->img3->move(public_path('img3'), $img3);
        $terrain = new InfoTerrain;
        $terrain->img1 = $img1;
        $terrain->img2 = $img2;
        $terrain->img3 = $img3;
        $terrain->title = $request->title;
        $terrain->description = $request->description;
        $terrain->location = $request->location;
        $terrain->type = $request->type;
        $terrain->surface = $request->surface;
        $terrain->ville = $request->ville;
        $terrain->price = $request->price;
        $terrain->save();
        // $img1 =Str::random().'.'.$request->img1->getClientOriginalExtension();
        // Storage::disk('public')->putFileAs('img1',$request->img1,$img1);
        // //InfoTerrain::create($request->post()+ ['img1' => $img1]);
        // $img2 =Str::random().'.'.$request->img2->getClientOriginalExtension();
        // Storage::disk('public')->putFileAs('img2',$request->img2,$img2);
        // //InfoTerrain::create($request->post()+ ['img2' => $img2]);
        // $img3 =Str::random().'.'.$request->img3->getClientOriginalExtension();
        // Storage::disk('public')->putFileAs('img3',$request->img3,$img3);
        // InfoTerrain::create($request->post()+ ['img1' => $img1]+ ['img2' => $img2]+ ['img3' => $img3]);
        return response()->json([
            'message'=>'Stade added successful'
        ]);
    }
    public function show(string $id)
    {
        return InfoTerrain::findOrFail($id)->select('id','img1','img2','img3','title','description','location','type','surface','ville','price')->get();
    } 
    public function search(Request $request)
    {
        $searchTerm = $request->input('searchTerm');

        $terrain = InfoTerrain::where('ville', 'LIKE', '%' . $searchTerm . '%')
                    ->orWhere('type', 'LIKE', '%' . $searchTerm . '%')
                    ->get();
        return response()->json($terrain);
    }
    public function update(Request $request, string $id,InfoTerrain $terrain)
    {  
        $img1 = time().'.'.request()->img1->getClientOriginalExtension();
        request()->img1->move(public_path('img1'), $img1);
        $img2 = time().'.'.request()->img2->getClientOriginalExtension();
        request()->img2->move(public_path('img2'), $img2);
        $img3 = time().'.'.request()->img3->getClientOriginalExtension();
        request()->img3->move(public_path('img3'), $img3);
        $terrain = InfoTerrain::findOrFail($id);
        $terrain->img1 = $img1;
        $terrain->img2 = $img2;
        $terrain->img3 = $img3;
        $terrain->title = $request->title;
        $terrain->description = $request->description;
        $terrain->location = $request->location;
        $terrain->type = $request->type;
        $terrain->surface = $request->surface;
        $terrain->ville = $request->ville;
        $terrain->price = $request->price;
        $terrain->save();

        // $request->validate([
        //     'img1' => 'nullable',
        //     'img2' => 'nullable',
        //     'img3' => 'nullable',
        //     'title' => 'required',
        //     'description' => 'required',
        //     'location' => 'required',
        //     'type' => 'required',
        //     'surface' => 'required',
        //     'ville' => 'required',
        //     'price' => 'required'
        // ]);

        //$terrain->fill($request->post())->update();

        // if($request->hasFile('img1','img2','img3')){
        //     if($terrain->img1){
        //         $exist = Storage::disk('public')->exists("img1/{$terrain->img1}"); //if image  exist ,show me it 
        //         if($exist){
        //             Storage::disk('public')->delete("img1/{$terrain->img1}"); //if image  exist ,show me it and delete it to put a new img
        //         }
        //     }elseif($terrain->img2){
        //         $exist = Storage::disk('public')->exists("img2/{$terrain->img2}"); //if image  exist ,show me it 
        //         if($exist){
        //             Storage::disk('public')->delete("img2/{$terrain->img2}"); //if image  exist ,show me it and delete it to put a new img
        //         }
        //     }else{
        //         $exist = Storage::disk('public')->exists("img3/{$terrain->img3}"); //if image  exist ,show me it 
        //         if($exist){
        //             Storage::disk('public')->delete("img3/{$terrain->img3}"); //if image  exist ,show me it and delete it to put a new img
        //         }
        //     }
        //     $image1 =Str::random().'.'.$request->img1->getClientOriginalExtension();
        //     Storage::disk('public')->putFileAs('img1',$request->img1,$image1);
        //     $terrain->img1 = $image1;
        //     $terrain->save();
        //     $image2 =Str::random().'.'.$request->img2->getClientOriginalExtension();
        //     Storage::disk('public')->putFileAs('img2',$request->img2,$image2);
        //     $terrain->img2 = $image2;
        //     $terrain->save();
        //     $image3 =Str::random().'.'.$request->img3->getClientOriginalExtension();
        //     Storage::disk('public')->putFileAs('img3',$request->img3,$image3);
        //     $terrain->img3 = $image3;
        //     $terrain->save();

        // }

        return response()->json([
            'message'=>'Terrain updated successful'
        ]);
    }
    public function destroy(string $id)
    {
        $terrain = InfoTerrain::findOrFail($id);
        $terrain->delete();
        return response()->json([
            'message'=>'terrain deleted successful'
        ]);
    }
}
