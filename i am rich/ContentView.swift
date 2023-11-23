//
//  ContentView.swift
//  i am rich
//
//  Created by mina on 13/11/2023.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        
        VStack {
            Button("mina") {
                /*@START_MENU_TOKEN@*//*@PLACEHOLDER=Action@*/ /*@END_MENU_TOKEN@*/
            }
            VStack {
                
                Text("i am rich")
                    .font(.title2)
                    .foregroundColor(.white)
                    .multilineTextAlignment(.center)
            }
            .padding()
            
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView().previewDevice(PreviewDevice(rawValue: "iPhone SE"))
    }
}
